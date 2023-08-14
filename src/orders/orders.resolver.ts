import { Resolver, Mutation, Args } from '@nestjs/graphql'
import { OrdersService } from './orders.service'
import { Order } from './entities/order.entity'
import { CreateOrderInput } from './dto/create-order.input'
import { UpdateOrderInput } from './dto/update-order.input'

@Resolver(() => Order)
export class OrdersResolver {
  constructor(private readonly ordersService: OrdersService) {}

  @Mutation(() => Order)
  createOrder(@Args('createOrderInput') createOrderInput: CreateOrderInput) {
    return this.ordersService.create(createOrderInput)
  }

  @Mutation(() => Order)
  updateOrder(@Args('updateOrderInput') input: UpdateOrderInput) {
    return this.ordersService.update(input)
  }
}
