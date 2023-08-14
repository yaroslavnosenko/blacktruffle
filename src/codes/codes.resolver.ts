import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql'
import { CodesService } from './codes.service'
import { Code } from './entities/code.entity'
import { CreateCodeInput } from './dto/create-code.input'
import { UpdateCodeInput } from './dto/update-code.input'

@Resolver(() => Code)
export class CodesResolver {
  constructor(private readonly codesService: CodesService) {}

  @Mutation(() => Code)
  createCode(@Args('createCodeInput') input: CreateCodeInput) {
    return this.codesService.create(input)
  }

  @Query(() => Code, { name: 'code', nullable: true })
  findOne(@Args('id', { type: () => ID }) id: string) {
    return this.codesService.findOne(id)
  }

  @Mutation(() => Code)
  updateCode(@Args('updateCodeInput') input: UpdateCodeInput) {
    return this.codesService.update(input)
  }
}
