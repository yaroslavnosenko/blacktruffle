import { InputType, ID, Field } from '@nestjs/graphql'

@InputType()
export class CreateOfferInput {
  @Field(() => ID)
  merchantId: string

  @Field(() => String)
  name: string
}
