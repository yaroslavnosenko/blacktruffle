import { InputType, Field } from '@nestjs/graphql'

@InputType()
export class CreateMerchantInput {
  @Field(() => String)
  name: string
}
