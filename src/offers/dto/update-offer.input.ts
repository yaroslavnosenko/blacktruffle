import { InputType, Field, ID } from '@nestjs/graphql'

@InputType()
export class UpdateOfferInput {
  @Field(() => ID)
  id: string

  @Field(() => String, { nullable: true })
  name?: string
}
