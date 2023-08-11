import { ObjectType, Field } from '@nestjs/graphql'
import { Column, Entity, OneToMany } from 'typeorm'
import { BaseEntity } from '../../database/base.entity'
import { Merchant } from 'src/merchants/entities/merchant.entity'

@Entity()
@ObjectType()
export class User extends BaseEntity {
  @Field({ nullable: true })
  @Column({ nullable: true })
  firstName?: string

  @Field({ nullable: true })
  @Column({ nullable: true })
  lastName?: string

  @Field()
  @Column({ unique: true })
  email: string

  @OneToMany(() => Merchant, (merchant) => merchant.user)
  @Field(() => [Merchant])
  merchants: Promise<[Merchant]>
}
