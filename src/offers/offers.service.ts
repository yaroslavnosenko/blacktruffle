import { Injectable } from '@nestjs/common'
import { CreateOfferInput } from './dto/create-offer.input'
import { UpdateOfferInput } from './dto/update-offer.input'

@Injectable()
export class OffersService {
  create(input: CreateOfferInput) {
    return 'This action adds a new item'
  }

  findAll() {
    return `This action returns all items`
  }

  findOne(id: number) {
    return `This action returns a #${id} item`
  }

  update(id: number, input: UpdateOfferInput) {
    return `This action updates a #${id} item`
  }

  remove(id: number) {
    return `This action removes a #${id} item`
  }
}
