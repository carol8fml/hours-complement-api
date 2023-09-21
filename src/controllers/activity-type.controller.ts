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
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

/** Services */
import { ActivityTypeService } from '../services/activity-type.service';

/** Entities */
import { ActivityType } from '../entities/activity-type.entity';

/** DTO */
import { CreateActivityTypeDto } from 'src/dto/activity-type.dto';

@Controller('activity-types')
/** Tag para a documentação */
@ApiTags('activity-types')
export class ActivityTypeController {
  constructor(private readonly activityTypeService: ActivityTypeService) {}

  /**
   * Rota para criar um novo tipo de atividade.
   * @param activityType O tipo de atividade a ser criado.
   */
  @Post()
  @ApiOperation({ summary: 'Cria um novo tipo de atividade' })
  @ApiBody({ type: CreateActivityTypeDto })
  @ApiResponse({
    status: 201,
    description: 'O tipo de atividade foi criado',
    type: ActivityType,
  })
  async create(@Body() activityType: ActivityType): Promise<ActivityType> {
    return await this.activityTypeService.create(activityType);
  }

  /**
   * Rota para buscar todos os tipos de atividade cadastrados.
   */
  @Get()
  @ApiOperation({ summary: 'Retorna todos os tipos de atividade cadastrados' })
  @ApiResponse({
    status: 200,
    description: 'Tipos de atividade encontrados',
    type: [ActivityType],
  })
  async findAll(): Promise<ActivityType[]> {
    return await this.activityTypeService.findAll();
  }

  /**
   * Rota para buscar um tipo de atividade pelo ID.
   * @param id O ID do tipo de atividade a ser buscado.
   */
  @Get(':id')
  @ApiOperation({ summary: 'Retorna um tipo de atividade pelo ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({
    status: 200,
    description: 'Tipo de atividade encontrado',
    type: ActivityType,
  })
  async findOne(@Param('id') id: string): Promise<ActivityType | undefined> {
    return await this.activityTypeService.findOne(Number(id));
  }

  /**
   * Rota para atualizar um tipo de atividade existente pelo ID.
   * @param id O ID do tipo de atividade a ser atualizado.
   * @param activityType O tipo de atividade atualizado.
   */
  @Put(':id')
  @ApiOperation({ summary: 'Atualiza um tipo de atividade existente' })
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({ type: ActivityType })
  @ApiResponse({
    status: 200,
    description: 'O tipo de atividade foi atualizado',
    type: ActivityType,
  })
  async update(
    @Param('id') id: string,
    @Body() activityType: ActivityType,
  ): Promise<ActivityType | undefined> {
    return await this.activityTypeService.update(Number(id), activityType);
  }

  /**
   * Rota para remover um tipo de atividade pelo ID.
   * @param id O ID do tipo de atividade a ser removido.
   */
  @Delete(':id')
  @ApiOperation({ summary: 'Remove um tipo de atividade pelo ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({
    status: 204,
    description: 'O tipo de atividade foi removido',
  })
  remove(@Param('id') id: string): void {
    this.activityTypeService.remove(Number(id));
  }
}
