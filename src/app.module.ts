import { Module } from '@nestjs/common'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'

import { AppController } from './app.controller'
import { AppService } from './app.service'

import { GraphQLModule } from '@nestjs/graphql'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UsersModule } from './users/users.module'
import { CodesModule } from './codes/codes.module'
import { OffersModule } from './offers/offers.module'
import { OrdersModule } from './orders/orders.module'
import { MerchantsModule } from './merchants/merchants.module'
import { StaffModule } from './staff/staff.module'
import { GraphQLError, GraphQLFormattedError } from 'graphql'
import { DatabaseConfig } from './database/database.config'

@Module({
  imports: [
    TypeOrmModule.forRoot(DatabaseConfig()),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      formatError: (error: GraphQLError) => {
        const graphQLFormattedError: GraphQLFormattedError = {
          message:
            (error.extensions['originalError'] as string) || error.message,
        }
        return graphQLFormattedError
      },
    }),
    UsersModule,
    CodesModule,
    OffersModule,
    OrdersModule,
    MerchantsModule,
    StaffModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
