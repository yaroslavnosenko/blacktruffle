import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql'
import { MerchantsService } from './merchants.service'
import { Merchant } from './entities/merchant.entity'
import { CreateMerchantInput } from './dto/create-merchant.input'
import { UpdateMerchantInput } from './dto/update-merchant.input'

@Resolver(() => Merchant)
export class MerchantsResolver {
  constructor(private readonly merchantsService: MerchantsService) {}

  @Mutation(() => Merchant)
  createMerchant(@Args('createMerchantInput') input: CreateMerchantInput) {
    return this.merchantsService.create(input)
  }

  @Query(() => Merchant, { name: 'merchant', nullable: true })
  findOne(@Args('id', { type: () => ID }) id: string) {
    return this.merchantsService.findOne(id)
  }

  @Mutation(() => Merchant)
  updateMerchant(@Args('updateMerchantInput') input: UpdateMerchantInput) {
    return this.merchantsService.update(input)
  }
}
