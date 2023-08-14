import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql'
import { UsersService } from './users.service'
import { User } from './entities/user.entity'

import { SignUserInput } from './dto/sign-user.input'
import { UpdateUserInput } from './dto/update-user.input'
import { VerifyUserInput } from './dto/verify-user.input'

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => Boolean)
  async signUser(@Args('signUserInput') input: SignUserInput) {
    return await this.usersService.sign(input)
  }

  @Mutation(() => User, { nullable: true })
  async verifyUser(@Args('verifyUserInput') input: VerifyUserInput) {
    return this.usersService.verify(input)
  }

  @Mutation(() => User, { nullable: true })
  updateUser(@Args('updateUserInput') input: UpdateUserInput) {
    return this.usersService.update(input)
  }

  @Query(() => User, { nullable: true })
  user(@Args('id', { type: () => ID }) id: string) {
    return this.usersService.findOne(id)
  }
}
