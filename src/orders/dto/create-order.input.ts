import { InputType, ID, Field, Int } from '@nestjs/graphql'

@InputType()
export class ItemMap {
  @Field(() => ID)
  offerId: string

  @Field(() => Int)
  count: number
}

@InputType()
export class CreateOrderInput {
  @Field(() => ID)
  codeId: string

  @Field(() => [ItemMap])
  itemMap: ItemMap[]
}
