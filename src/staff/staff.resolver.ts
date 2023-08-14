import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql'
import { StaffService } from './staff.service'
import { Staff } from './entities/staff.entity'
import { CreateStaffInput } from './dto/create-staff.input'
import { UpdateStaffInput } from './dto/update-staff.input'

@Resolver(() => Staff)
export class StaffResolver {
  constructor(private readonly staffService: StaffService) {}

  @Mutation(() => Staff)
  createStaff(@Args('createStaffInput') input: CreateStaffInput) {
    return this.staffService.create(input)
  }

  @Mutation(() => Staff)
  updateStaff(@Args('updateStaffInput') input: UpdateStaffInput) {
    return this.staffService.update(input)
  }

  @Query(() => Staff, { name: 'staff', nullable: true })
  findOne(@Args('id', { type: () => ID }) id: string) {
    return this.staffService.findOne(id)
  }
}
