import { Inject, Injectable, NotFoundException } from '@nestjs/common'
import { SignUserInput } from './dto/sign-user.input'
import { UpdateUserInput } from './dto/update-user.input'
import { VerifyUserInput } from './dto/verify-user.input'
import { CACHE_MANAGER } from '@nestjs/cache-manager'
import { Cache } from 'cache-manager'
import { generateOTP } from '../utils'
import { User } from './entities/user.entity'
import { TokenType } from './entities/token.type'

const CODE_TTL = 60 * 1000

@Injectable()
export class UsersService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  async sign({ email }: SignUserInput): Promise<boolean> {
    const otp = generateOTP()
    await this.cacheManager.set(email, otp, CODE_TTL)
    // send mail
    console.log(otp)
    return true
  }

  async verify({ email, code }: VerifyUserInput): Promise<TokenType> {
    const otp = await this.cacheManager.get(email)
    if (otp !== code) return null

    const token = 'TOKEN'

    let user: User | null = await User.findOneBy({ email })
    if (user) {
      return { user, token }
    }

    user = await this.create({ email })
    return { user, token }
  }

  async create({ email }: SignUserInput): Promise<User> {
    const user = User.create({ email })
    return user.save()
  }

  async update(input: UpdateUserInput): Promise<User> {
    const { id, ...fileds } = input
    const dbUser = await User.findOneBy({ id })
    if (!dbUser) {
      throw new NotFoundException('User Not Found')
    }
    const user = User.merge(dbUser, fileds)
    return user.save()
  }

  async findOne(id: string): Promise<User> {
    return User.findOneBy({ id })
  }
}
