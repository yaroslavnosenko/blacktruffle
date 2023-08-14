import { InputType, Field, ID } from '@nestjs/graphql'

@InputType()
export class UpdateStaffInput {
  @Field(() => ID)
  id: string

  @Field(() => String, { nullable: true })
  name?: string

  @Field(() => String, { nullable: true })
  username?: string

  @Field(() => String, { nullable: true })
  pin?: string
}
