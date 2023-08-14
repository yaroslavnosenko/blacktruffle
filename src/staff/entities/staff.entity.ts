import { ObjectType, Field } from '@nestjs/graphql'
import { BaseEntity } from '../../database/base.entity'
import { Column, Entity, ManyToOne } from 'typeorm'
import { Merchant } from '../../merchants/entities/merchant.entity'

@ObjectType()
@Entity()
export class Staff extends BaseEntity {
  @Field()
  @Column()
  name: string

  @Field()
  @Column({ unique: true })
  username: string

  @Field()
  @Column()
  pin: string

  @ManyToOne(() => Merchant, (merchant) => merchant.staff)
  @Field(() => Merchant)
  merchant: Promise<Merchant>
}
