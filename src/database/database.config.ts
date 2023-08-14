import { TypeOrmModuleOptions } from '@nestjs/typeorm'

export const DatabaseConfig = (): TypeOrmModuleOptions => {
  return {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'dev',
    password: 'dev',
    database: 'truffle',
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    synchronize: true,
    logging: true,
  }
}
