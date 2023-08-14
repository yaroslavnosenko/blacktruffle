import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common'
import { CreateStaffInput } from './dto/create-staff.input'
import { UpdateStaffInput } from './dto/update-staff.input'
import { Staff } from './entities/staff.entity'
import { Merchant } from '../merchants/entities/merchant.entity'

@Injectable()
export class StaffService {
  async create(input: CreateStaffInput): Promise<Staff> {
    const { merchantId, ...fields } = input
    const merchant = await Merchant.findOneBy({ id: merchantId })
    if (!merchant) {
      throw new NotFoundException('Merchant NOT Found')
    }
    const staff = Staff.create({ ...fields })
    staff.merchant = Promise.resolve(merchant)
    try {
      return await staff.save()
    } catch {
      throw new ConflictException('Username Exists')
    }
  }

  async findOne(id: string): Promise<Staff> {
    return Staff.findOneBy({ id })
  }

  async update(input: UpdateStaffInput): Promise<Staff> {
    const { id, ...fields } = input
    const dbStaff = await Staff.findOneBy({ id })
    const staff = Staff.merge<Staff>(dbStaff, fields)
    try {
      return staff.save()
    } catch {
      throw new ConflictException('Username Exists')
    }
  }
}
