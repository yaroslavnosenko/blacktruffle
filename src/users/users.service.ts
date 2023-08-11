import { Inject, Injectable } from '@nestjs/common'
import { SignUserInput } from './dto/sign-user.input'
import { UpdateUserInput } from './dto/update-user.input'
import { VerifyUserInput } from './dto/verify-user.input'
import { CACHE_MANAGER } from '@nestjs/cache-manager'
import { Cache } from 'cache-manager'
import { generateOTP } from '../utils'
import { User } from './entities/user.entity'

const CODE_TTL = 60 * 1000

@Injectable()
export class UsersService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  async sign({ email }: SignUserInput) {
    const otp = generateOTP()
    await this.cacheManager.set(email, otp, CODE_TTL)
    // send mail
    console.log(otp)
  }

  async verify({ email, code }: VerifyUserInput): Promise<User> {
    const otp = await this.cacheManager.get(email)
    if (otp !== code) return null

    const user: User | null = await this.findOneByEmail(email)
    if (user) return user

    return this.create({ email })
  }

  async create({ email }: SignUserInput): Promise<User> {
    const user = User.create({ email })
    return user.save()
  }

  async update(input: UpdateUserInput): Promise<User> {
    const { id, ...fileds } = input
    const dbUser = await User.findOneBy({ id })
    if (!dbUser) return null
    const user = User.merge(dbUser, fileds)
    return user.save()
  }

  async findOneByEmail(email: string) {
    return User.findOneBy({ email })
  }

  async findOne(id: string) {
    return User.findOneBy({ id })
  }
}
