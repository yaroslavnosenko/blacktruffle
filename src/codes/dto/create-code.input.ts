import { InputType, Field, ID } from '@nestjs/graphql'

@InputType()
export class CreateCodeInput {
  @Field(() => ID)
  merchantId: string

  @Field(() => String)
  name: string
}
