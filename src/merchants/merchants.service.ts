import { Injectable, NotFoundException } from '@nestjs/common'
import { CreateMerchantInput } from './dto/create-merchant.input'
import { UpdateMerchantInput } from './dto/update-merchant.input'
import { Merchant } from './entities/merchant.entity'
import { User } from '../users/entities/user.entity'

@Injectable()
export class MerchantsService {
  async create(input: CreateMerchantInput) {
    const { userId, ...fields } = input
    const user = await User.findOneBy({ id: userId })
    if (!user) {
      throw new NotFoundException('User NOT Found')
    }
    const merchant = Merchant.create<Merchant>(fields)
    merchant.user = Promise.resolve(user)
    return merchant.save()
  }

  findOne(id: string) {
    return Merchant.findOneBy({ id })
  }

  async update(input: UpdateMerchantInput) {
    const { id, ...fields } = input
    const dbMerchant = await Merchant.findOneBy({ id })
    if (!dbMerchant) {
      throw new NotFoundException('Merchant NOT Found')
    }
    const merchant = Merchant.merge<Merchant>(dbMerchant, fields)
    return merchant.save()
  }
}
