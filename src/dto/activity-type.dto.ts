/** Libs */
import { IsNotEmpty, IsNumber, IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateActivityTypeDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Length(1, 100)
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  limitHours: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  dimensionId: number;
}
