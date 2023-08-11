import { Field, ObjectType } from '@nestjs/graphql'
import { BaseEntity } from '../../database/base.entity'
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm'
import { Code } from '../../codes/entities/code.entity'
import { Item } from './item.entity'

@ObjectType()
@Entity()
export class Order extends BaseEntity {
  @Field()
  @Column()
  status: string

  @ManyToOne(() => Code, (code) => code.orders)
  code: Promise<Code>

  @Field(() => [Item])
  @OneToMany(() => Item, (item) => item.order)
  items: Promise<[Item]>
}
