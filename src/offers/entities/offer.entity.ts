import { ObjectType, Field } from '@nestjs/graphql'
import { BaseEntity } from '../../database/base.entity'
import { Column, Entity, ManyToOne } from 'typeorm'
import { Merchant } from '../../merchants/entities/merchant.entity'

@ObjectType()
@Entity()
export class Offer extends BaseEntity {
  @Field()
  @Column()
  name: string

  @ManyToOne(() => Merchant, (merchant) => merchant.offers)
  merchant: Promise<Merchant>
}
