import { ProfileDto } from './dto/profile.dto';
import { ProfileEntity } from './entities/profile.entity';

export function mapProfileEntityToProfileDto(
  profile: ProfileEntity,
): ProfileDto {
  return {
    email: profile.email,
    id: profile.id,
    username: profile.username,
  } satisfies ProfileDto;
}
