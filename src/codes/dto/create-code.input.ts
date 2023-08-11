import { InputType, Int, Field } from '@nestjs/graphql'

@InputType()
export class CreateCodeInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number
}
