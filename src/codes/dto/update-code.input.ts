import { CreateCodeInput } from './create-code.input'
import { InputType, Field, Int, PartialType } from '@nestjs/graphql'

@InputType()
export class UpdateCodeInput extends PartialType(CreateCodeInput) {
  @Field(() => Int)
  id: number
}
