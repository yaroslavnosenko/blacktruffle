import { InputType, Field, ID } from '@nestjs/graphql'

@InputType()
export class CreateMerchantInput {
  @Field(() => ID)
  userId: string

  @Field(() => String)
  name: string
}
