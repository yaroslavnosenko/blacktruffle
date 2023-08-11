import { InputType, Field, ID } from '@nestjs/graphql'

@InputType()
export class UpdateUserInput {
  @Field(() => ID)
  id: string

  @Field(() => String, { nullable: true })
  email?: string

  @Field(() => String, { nullable: true })
  firstName: string

  @Field(() => String, { nullable: true })
  lastName: string
}
