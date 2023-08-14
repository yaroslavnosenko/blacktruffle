import { Injectable, NotFoundException } from '@nestjs/common'
import { CreateCodeInput } from './dto/create-code.input'
import { UpdateCodeInput } from './dto/update-code.input'
import { Merchant } from '../merchants/entities/merchant.entity'
import { Code } from './entities/code.entity'

@Injectable()
export class CodesService {
  async create(input: CreateCodeInput): Promise<Code> {
    const { merchantId, ...fields } = input
    const merchant = await Merchant.findOneBy({ id: merchantId })
    if (!merchant) {
      throw new NotFoundException('Merchant NOT Found')
    }
    const code = Code.create({ ...fields })
    code.merchant = Promise.resolve(merchant)
    return await code.save()
  }

  findOne(id: string): Promise<Code> {
    return Code.findOneBy({ id })
  }

  async update(input: UpdateCodeInput): Promise<Code> {
    const { id, ...fields } = input
    const dbCode = await Code.findOneBy({ id })
    const code = Code.merge<Code>(dbCode, fields)
    return code.save()
  }
}
