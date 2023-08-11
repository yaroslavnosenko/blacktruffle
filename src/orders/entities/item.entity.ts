import { Field, ObjectType } from '@nestjs/graphql'
import { BaseEntity } from '../../database/base.entity'
import { Column, Entity, ManyToOne } from 'typeorm'
import { Offer } from '../../offers/entities/offer.entity'
import { Order } from './order.entity'

@ObjectType()
@Entity()
export class Item extends BaseEntity {
  @ManyToOne(() => Offer)
  @Field(() => Offer)
  offer: Promise<Offer>

  @ManyToOne(() => Order, (order) => order.items)
  order: Promise<Order>

  @Column()
  @Field()
  count: number
}
