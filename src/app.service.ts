import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  getStatus() {
    return { app: 'Black Truffle', status: 200 }
  }
}
