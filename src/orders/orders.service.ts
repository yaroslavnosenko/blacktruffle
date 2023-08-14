import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common'
import { CreateOrderInput } from './dto/create-order.input'
import { UpdateOrderInput } from './dto/update-order.input'
import { Code } from '../codes/entities/code.entity'
import { Order } from './entities/order.entity'
import { hasDuplicates } from '../utils'
import { Offer } from '../offers/entities/offer.entity'
import { In } from 'typeorm'
import { Item } from './entities/item.entity'

@Injectable()
export class OrdersService {
  async create(input: CreateOrderInput) {
    const { codeId, itemMap } = input
    const code = await Code.findOneBy({ id: codeId })
    if (!code) {
      throw new NotFoundException('Code NOT Found')
    }
    if (itemMap.length === 0) {
      throw new BadRequestException('EMPTY Items')
    }
    const offersIds = itemMap.map((item) => item.offerId)
    if (hasDuplicates(offersIds)) {
      throw new BadRequestException('DUPLICATE Items')
    }
    const offers = await Offer.findBy({ id: In(offersIds) })
    console.log(offers)
    if (offers.length !== itemMap.length) {
      throw new NotFoundException('Offer NOT Found')
    }
    const items = itemMap.map((item) => {
      const newItem = new Item()
      newItem.count = item.count
      newItem.offer = Promise.resolve(
        offers.find((offer) => offer.id === item.offerId),
      )
      return newItem
    })
    const order: Order = new Order()
    order.status = 'CREATED'
    order.code = Promise.resolve(code)
    order.items = Promise.resolve(items)
    return order.save()
  }

  async update(input: UpdateOrderInput) {
    const { id, ...fields } = input
    const dbOrder = await Order.findOneBy({ id })
    if (!dbOrder) {
      throw new NotFoundException('Order NOT Found')
    }
    const order = Order.merge<Order>(dbOrder, fields)
    return order.save()
  }
}
