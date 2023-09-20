/** Libs */
import { IsEnum, IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Length(1, 50)
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  registration: string;

  @ApiProperty({ enum: ['GA', 'SI'] })
  @IsNotEmpty()
  @IsEnum(['GA', 'SI'])
  course: string;

  @ApiProperty({ enum: ['M', 'N'] })
  @IsNotEmpty()
  @IsEnum(['M', 'N'])
  shift: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  cpf: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  telephone: string;

  @ApiProperty({ required: false })
  @IsString()
  @Length(0, 200)
  address?: string;

  id?: number;
}
