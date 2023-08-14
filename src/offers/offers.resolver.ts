import { Resolver, Mutation, Args } from '@nestjs/graphql'
import { OffersService } from './offers.service'
import { Offer } from './entities/offer.entity'
import { CreateOfferInput } from './dto/create-offer.input'
import { UpdateOfferInput } from './dto/update-offer.input'

@Resolver(() => Offer)
export class OffersResolver {
  constructor(private readonly offersService: OffersService) {}

  @Mutation(() => Offer)
  createOffer(@Args('createOfferInput') input: CreateOfferInput) {
    return this.offersService.create(input)
  }

  @Mutation(() => Offer)
  updateOffer(@Args('updateOfferInput') input: UpdateOfferInput) {
    return this.offersService.update(input)
  }
}
