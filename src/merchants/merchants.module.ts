import { Module } from '@nestjs/common'
import { MerchantsService } from './merchants.service'
import { MerchantsResolver } from './merchants.resolver'

@Module({
  providers: [MerchantsResolver, MerchantsService],
})
export class MerchantsModule {}
