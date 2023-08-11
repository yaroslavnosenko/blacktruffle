import { Module } from '@nestjs/common'
import { CodesService } from './codes.service'
import { CodesResolver } from './codes.resolver'

@Module({
  providers: [CodesResolver, CodesService],
})
export class CodesModule {}
