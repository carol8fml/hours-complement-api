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
import { DimensionService } from '../services/dimension.service';

/** Entities */
import { Dimension } from '../entities/dimension.entity';

/** dto */
import { CreateDimensionDto } from 'src/dto/dimensions.dto';

@Controller('dimensions')
@ApiTags('dimensions')
export class DimensionController {
  constructor(private readonly dimensionService: DimensionService) {}

  /**
   * Cria uma nova dimensão.
   * @param dimension A dimensão a ser criada.
   */
  @Post()
  @ApiOperation({ summary: 'Cria uma nova dimensão' })
  @ApiResponse({
    status: 201,
    description: 'A dimensão foi criada',
    type: Dimension,
  })
  @ApiBody({ type: CreateDimensionDto })
  create(@Body() dimension: Dimension): Dimension {
    return this.dimensionService.create(dimension);
  }

  /**
   * Retorna todas as dimensões cadastradas.
   */
  @Get()
  @ApiOperation({ summary: 'Retorna todas as dimensões cadastradas' })
  @ApiResponse({
    status: 200,
    description: 'Dimensões encontradas',
    type: [Dimension],
  })
  findAll(): Dimension[] {
    return this.dimensionService.findAll();
  }

  /**
   * Retorna uma dimensão pelo ID.
   * @param id O ID da dimensão a ser buscada.
   */
  @Get(':id')
  @ApiOperation({ summary: 'Retorna uma dimensão pelo ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({
    status: 200,
    description: 'Dimensão encontrada',
    type: Dimension,
  })
  @ApiResponse({ status: 404, description: 'Dimensão não encontrada' })
  findOne(@Param('id') id: string): Dimension | undefined {
    return this.dimensionService.findOne(Number(id));
  }

  /**
   * Atualiza uma dimensão existente pelo ID.
   * @param id O ID da dimensão a ser atualizada.
   * @param dimension A dimensão atualizada.
   */
  @Put(':id')
  @ApiOperation({ summary: 'Atualiza uma dimensão existente' })
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({ type: Dimension })
  @ApiResponse({
    status: 200,
    description: 'A dimensão foi atualizada',
    type: Dimension,
  })
  @ApiResponse({ status: 404, description: 'Dimensão não encontrada' })
  update(
    @Param('id') id: string,
    @Body() dimension: Dimension,
  ): Dimension | undefined {
    return this.dimensionService.update(Number(id), dimension);
  }

  /**
   * Remove uma dimensão pelo ID.
   * @param id O ID da dimensão a ser removida.
   */
  @Delete(':id')
  @ApiOperation({ summary: 'Remove uma dimensão pelo ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 204, description: 'A dimensão foi removida' })
  @ApiResponse({ status: 404, description: 'Dimensão não encontrada' })
  remove(@Param('id') id: string): void {
    this.dimensionService.remove(Number(id));
  }
}
