import { Injectable, NotFoundException } from '@nestjs/common'
import { CreateOfferInput } from './dto/create-offer.input'
import { UpdateOfferInput } from './dto/update-offer.input'
import { Merchant } from '../merchants/entities/merchant.entity'
import { Offer } from './entities/offer.entity'

@Injectable()
export class OffersService {
  async create(input: CreateOfferInput) {
    const { merchantId, ...fields } = input
    const merchant = await Merchant.findOneBy({ id: merchantId })
    if (!merchant) {
      throw new NotFoundException('Merchant NOT Found')
    }
    const offer = Offer.create<Offer>(fields)
    offer.merchant = Promise.resolve(merchant)
    return offer.save()
  }

  async update(input: UpdateOfferInput) {
    const { id, ...fields } = input
    const dbOffer = await Offer.findOneBy({ id })
    if (!dbOffer) {
      throw new NotFoundException('Offer NOT Found')
    }
    const offer = Offer.merge<Offer>(dbOffer, fields)
    return offer.save()
  }
}
