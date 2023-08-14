import { InputType, Field, ID } from '@nestjs/graphql'

@InputType()
export class UpdateCodeInput {
  @Field(() => ID)
  id: string

  @Field(() => String, { nullable: true })
  name?: string
}
