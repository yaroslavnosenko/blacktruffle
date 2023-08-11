import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
import { MerchantsService } from './merchants.service'
import { Merchant } from './entities/merchant.entity'
import { CreateMerchantInput } from './dto/create-merchant.input'
import { UpdateMerchantInput } from './dto/update-merchant.input'

@Resolver(() => Merchant)
export class MerchantsResolver {
  constructor(private readonly merchantsService: MerchantsService) {}

  @Mutation(() => Merchant)
  createMerchant(
    @Args('createMerchantInput') createMerchantInput: CreateMerchantInput,
  ) {
    return this.merchantsService.create(createMerchantInput)
  }

  @Query(() => [Merchant], { name: 'merchants' })
  findAll() {
    return this.merchantsService.findAll()
  }

  @Query(() => Merchant, { name: 'merchant' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.merchantsService.findOne(id)
  }

  @Mutation(() => Merchant)
  updateMerchant(
    @Args('updateMerchantInput') updateMerchantInput: UpdateMerchantInput,
  ) {
    return this.merchantsService.update(
      updateMerchantInput.id,
      updateMerchantInput,
    )
  }

  @Mutation(() => Merchant)
  removeMerchant(@Args('id', { type: () => Int }) id: number) {
    return this.merchantsService.remove(id)
  }
}
