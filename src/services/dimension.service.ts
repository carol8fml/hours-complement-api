/** Libs */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

/** Entities */
import { Dimension } from '../entities/dimension.entity';

@Injectable()
export class DimensionService {
  constructor(
    @InjectRepository(Dimension)
    private readonly dimensionRepository: Repository<Dimension>,
  ) {}

  /**
   * Cria uma nova dimensão.
   * @param dimension A dimensão a ser criada.
   */
  async create(dimension: Dimension): Promise<Dimension> {
    return await this.dimensionRepository.save(dimension);
  }

  /**
   * Retorna todas as dimensões cadastradas.
   */
  async findAll(): Promise<Dimension[]> {
    return await this.dimensionRepository.find();
  }

  /**
   * Retorna uma dimensão com base em seu ID.
   * @param id O ID da dimensão a ser retornada.
   */
  async findOne(id: number): Promise<Dimension | undefined> {
    return await this.dimensionRepository.findOne({ where: { id } });
  }

  /**
   * Atualiza uma dimensão existente.
   * @param id O ID da dimensão a ser atualizada.
   * @param dimension A dimensão atualizada.
   */
  async update(
    id: number,
    dimension: Dimension,
  ): Promise<Dimension | undefined> {
    await this.dimensionRepository.update(id, dimension);
    return await this.dimensionRepository.findOne({ where: { id } });
  }

  /**
   * Remove uma dimensão com base em seu ID.
   * @param id O ID da dimensão a ser removida.
   */
  async remove(id: number): Promise<void> {
    await this.dimensionRepository.delete(id);
  }
}
