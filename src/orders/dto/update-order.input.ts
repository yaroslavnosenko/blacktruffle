import { InputType, Field, ID } from '@nestjs/graphql'

@InputType()
export class UpdateOrderInput {
  @Field(() => ID)
  id: string

  @Field()
  status: string
}
