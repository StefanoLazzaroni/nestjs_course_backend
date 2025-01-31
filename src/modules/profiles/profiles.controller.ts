import { Controller, Get } from '@nestjs/common';
import { ProfilesService } from './profiles.service';

@Controller('profiles')
export class ProfilesController {
  constructor(private readonly profilesService: ProfilesService) {}

  @Get()
  async findAllProfiles() {
    return await this.profilesService.findAll();
  }
}
