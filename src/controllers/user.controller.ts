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

/** Services */
import { UserService } from '../services/user.service';

/** Entities */
import { User } from '../entities/user.entity';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';

@Controller('users')
/** Tag para a documentação */
@ApiTags('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({ summary: 'Cria um novo usuário' })
  @ApiResponse({ status: 201, description: 'O usuário foi criado', type: User })
  @ApiBody({ type: User })
  create(@Body() user: User): User {
    return this.userService.create(user);
  }

  @Get()
  @ApiOperation({ summary: 'Retorna todos os usuários cadastrados' })
  @ApiResponse({
    status: 200,
    description: 'Usuários encontrados',
    type: [User],
  })
  async findAll(): Promise<User[]> {
    const users = await this.userService.findAll();
    return users.map((user) => ({ ...user, id: user.id }));
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retorna um usuário pelo ID' })
  /** Especifica o parâmentro */
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Usuário encontrado', type: User })
  @ApiResponse({ status: 404, description: 'Usuário não encontrado' })
  findOne(@Param('id') id: string): User | undefined {
    return this.userService.findOne(Number(id));
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
  update(@Param('id') id: string, @Body() user: User): User | undefined {
    return this.userService.update(Number(id), user);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove um usuário pelo ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 204, description: 'O usuário foi removido' })
  @ApiResponse({ status: 404, description: 'Usuário não encontrado' })
  remove(@Param('id') id: string): void {
    this.userService.remove(Number(id));
  }
}
