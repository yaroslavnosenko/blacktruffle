import { Field, ObjectType } from '@nestjs/graphql'
import { User } from './user.entity'

@ObjectType()
export class TokenType {
  @Field(() => User)
  user: User

  @Field()
  token: string
}
