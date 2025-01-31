import { ArrayMinSize, IsArray, IsString } from 'class-validator';

export class CreateChatDto {
  @IsString()
  name: string;

  @IsArray()
  @IsString({ each: true })
  @ArrayMinSize(1)
  participantsId: string[];
}
