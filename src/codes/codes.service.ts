import { Injectable } from '@nestjs/common'
import { CreateCodeInput } from './dto/create-code.input'
import { UpdateCodeInput } from './dto/update-code.input'

@Injectable()
export class CodesService {
  create(createCodeInput: CreateCodeInput) {
    return 'This action adds a new code'
  }

  findAll() {
    return `This action returns all codes`
  }

  findOne(id: number) {
    return `This action returns a #${id} code`
  }

  update(id: number, updateCodeInput: UpdateCodeInput) {
    return `This action updates a #${id} code`
  }

  remove(id: number) {
    return `This action removes a #${id} code`
  }
}
