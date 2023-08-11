import { Module } from '@nestjs/common'
import { UsersService } from './users.service'
import { UsersResolver } from './users.resolver'
import { CacheModule } from '@nestjs/cache-manager'

@Module({
  imports: [CacheModule.register()],
  providers: [UsersResolver, UsersService],
})
export class UsersModule {}
