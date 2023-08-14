import { InputType, Field, ID } from '@nestjs/graphql'

@InputType()
export class UpdateMerchantInput {
  @Field(() => ID)
  id: string

  @Field({ nullable: true })
  name?: string
}
