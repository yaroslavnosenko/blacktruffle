import { Field, ObjectType } from '@nestjs/graphql'
import { BaseEntity } from '../../database/base.entity'
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm'
import { User } from '../../users/entities/user.entity'
import { Code } from '../../codes/entities/code.entity'
import { Offer } from '../../offers/entities/offer.entity'
import { Staff } from '../../staff/entities/staff.entity'

@ObjectType()
@Entity()
export class Merchant extends BaseEntity {
  @Field()
  @Column()
  name: string

  @ManyToOne(() => User, (user) => user.merchants)
  user: Promise<User>

  @OneToMany(() => Code, (code) => code.merchant)
  @Field(() => [Code])
  codes: Promise<Code[]>

  @OneToMany(() => Offer, (offer) => offer.merchant)
  @Field(() => [Offer])
  offers: Promise<Offer[]>

  @OneToMany(() => Staff, (staff) => staff.merchant)
  @Field(() => [Staff])
  staff: Promise<Staff[]>
}
