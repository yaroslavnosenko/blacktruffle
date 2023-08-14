import { InputType, ID, Field } from '@nestjs/graphql'

@InputType()
export class CreateStaffInput {
  @Field(() => ID)
  merchantId: string

  @Field(() => String)
  name: string

  @Field(() => String)
  username: string

  @Field(() => String)
  pin: string
}
