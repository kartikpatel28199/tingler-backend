import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class UserActionDto {
  @ApiProperty()
  @IsNumber()
  toUserId: number;
}
