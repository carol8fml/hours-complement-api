/** Libs */
import { Injectable } from '@nestjs/common';

/** Entities */
import { Dimension } from '../entities/dimension.entity';

@Injectable()
export class DimensionService {
  private dimensions: Dimension[] = [];
  private currentId = 1;

  /**
   * Cria uma nova dimensão.
   * @param dimension A dimensão a ser criada.
   */
  create(dimension: Dimension): Dimension {
    dimension.id = this.currentId++;
    this.dimensions.push(dimension);
    return dimension;
  }

  /**
   * Retorna todas as dimensões cadastradas.
   * @returns Uma lista de dimensões cadastradas.
   */
  findAll(): Dimension[] {
    return this.dimensions;
  }

  /**
   * Retorna uma dimensão com base em seu ID.
   * @param id O ID da dimensão a ser retornada.
   */
  findOne(id: number): Dimension | undefined {
    return this.dimensions.find((dim) => dim.id === id);
  }

  /**
   * Atualiza uma dimensão existente.
   *
   * @param id O ID da dimensão a ser atualizada.
   * @param dimension A dimensão atualizada.
   */
  update(id: number, dimension: Dimension): Dimension | undefined {
    const index = this.dimensions.findIndex((dim) => dim.id === id);
    if (index !== -1) {
      dimension.id = id;
      this.dimensions[index] = dimension;
      return dimension;
    }
    return undefined;
  }

  /**
   * Remove uma dimensão com base em seu ID.
   * @param id O ID da dimensão a ser removida.
   */
  remove(id: number): void {
    const index = this.dimensions.findIndex((dim) => dim.id === id);
    if (index !== -1) {
      this.dimensions.splice(index, 1);
    }
  }
}
