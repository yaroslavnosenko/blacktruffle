import { InputType, Field } from '@nestjs/graphql'

@InputType()
export class VerifyUserInput {
  @Field(() => String)
  email: string

  @Field(() => String)
  code: string
}
