import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
import { OffersService } from './offers.service'
import { Offer } from './entities/offer.entity'
import { CreateOfferInput } from './dto/create-offer.input'
import { UpdateOfferInput } from './dto/update-offer.input'

@Resolver(() => Offer)
export class OffersResolver {
  constructor(private readonly offersService: OffersService) {}

  @Mutation(() => Offer)
  createItem(@Args('createItemInput') createItemInput: CreateOfferInput) {
    return this.offersService.create(createItemInput)
  }

  @Mutation(() => Offer)
  updateItem(@Args('updateItemInput') updateItemInput: UpdateOfferInput) {
    return this.offersService.update(updateItemInput.id, updateItemInput)
  }

  @Mutation(() => Offer)
  removeItem(@Args('id', { type: () => Int }) id: number) {
    return this.offersService.remove(id)
  }

  @Query(() => Offer, { name: 'offer' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.offersService.findOne(id)
  }
}
