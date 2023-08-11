import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
import { CodesService } from './codes.service'
import { Code } from './entities/code.entity'
import { CreateCodeInput } from './dto/create-code.input'
import { UpdateCodeInput } from './dto/update-code.input'

@Resolver(() => Code)
export class CodesResolver {
  constructor(private readonly codesService: CodesService) {}

  @Mutation(() => Code)
  createCode(@Args('createCodeInput') createCodeInput: CreateCodeInput) {
    return this.codesService.create(createCodeInput)
  }

  @Query(() => [Code], { name: 'codes' })
  findAll() {
    return this.codesService.findAll()
  }

  @Query(() => Code, { name: 'code' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.codesService.findOne(id)
  }

  @Mutation(() => Code)
  updateCode(@Args('updateCodeInput') updateCodeInput: UpdateCodeInput) {
    return this.codesService.update(updateCodeInput.id, updateCodeInput)
  }

  @Mutation(() => Code)
  removeCode(@Args('id', { type: () => Int }) id: number) {
    return this.codesService.remove(id)
  }
}
