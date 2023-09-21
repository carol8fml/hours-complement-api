/** Libs */
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';

import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';

/** Services */
import { UserService } from '../services/user.service';

/** Entities */
import { User } from '../entities/user.entity';

/** DTO */
import { CreateUserDto } from 'src/dto/user.dto';

@Controller('users')
/** Tag para a documentação */
@ApiTags('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({ summary: 'Cria um novo usuário' })
  @ApiResponse({ status: 201, description: 'O usuário foi criado', type: User })
  @ApiBody({ type: CreateUserDto })
  async create(@Body() user: User): Promise<User> {
    return await this.userService.create(user);
  }

  @Get()
  @ApiOperation({ summary: 'Retorna todos os usuários cadastrados' })
  @ApiResponse({
    status: 200,
    description: 'Usuários encontrados',
    type: [User],
  })
  async findAll(): Promise<User[]> {
    return await this.userService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retorna um usuário pelo ID' })
  /** Especifica o parâmentro */
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Usuário encontrado', type: User })
  @ApiResponse({ status: 404, description: 'Usuário não encontrado' })
  async findOne(@Param('id') id: string): Promise<User | undefined> {
    return await this.userService.findOne(Number(id));
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualiza um usuário existente' })
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({ type: User })
  @ApiResponse({
    status: 200,
    description: 'O usuário foi atualizado',
    type: User,
  })
  @ApiResponse({ status: 404, description: 'Usuário não encontrado' })
  async update(
    @Param('id') id: string,
    @Body() user: User,
  ): Promise<User | undefined> {
    return await this.userService.update(Number(id), user);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove um usuário pelo ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 204, description: 'O usuário foi removido' })
  @ApiResponse({ status: 404, description: 'Usuário não encontrado' })
  async remove(@Param('id') id: string): Promise<void> {
    await this.userService.remove(Number(id));
  }
}
