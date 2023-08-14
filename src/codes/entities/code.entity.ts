import { ObjectType, Field } from '@nestjs/graphql'
import { BaseEntity } from '../../database/base.entity'
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm'
import { Merchant } from '../../merchants/entities/merchant.entity'
import { Order } from '../../orders/entities/order.entity'

@ObjectType()
@Entity()
export class Code extends BaseEntity {
  @Field(() => String)
  @Column()
  name: string

  @ManyToOne(() => Merchant, (merchant) => merchant.codes)
  @Field(() => Merchant)
  merchant: Promise<Merchant>

  @OneToMany(() => Order, (order) => order.code)
  @Field(() => [Order])
  orders: Promise<Order[]>
}
