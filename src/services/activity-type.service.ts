/** Libs */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

/** Entities */
import { ActivityType } from '../entities/activity-type.entity';

@Injectable()
export class ActivityTypeService {
  constructor(
    @InjectRepository(ActivityType)
    private readonly activityTypeRepository: Repository<ActivityType>,
  ) {}

  /**
   * Cria um novo tipo de atividade.
   * @param activityType O tipo de atividade a ser criado.
   */
  async create(activityType: ActivityType): Promise<ActivityType> {
    return await this.activityTypeRepository.save(activityType);
  }

  /**
   * Retorna todos os tipos de atividade cadastrados.
   */
  async findAll(): Promise<ActivityType[]> {
    return await this.activityTypeRepository.find();
  }

  /**
   * Retorna um tipo de atividade com base em seu ID.
   * @param id O ID do tipo de atividade a ser retornado.
   */
  async findOne(id: number): Promise<ActivityType | undefined> {
    return await this.activityTypeRepository.findOne({ where: { id } });
  }

  /**
   * Atualiza um tipo de atividade existente.
   * @param id O ID do tipo de atividade a ser atualizado.
   * @param activityType O tipo de atividade atualizado.
   */
  async update(
    id: number,
    activityType: ActivityType,
  ): Promise<ActivityType | undefined> {
    await this.activityTypeRepository.update(id, activityType);
    return await this.activityTypeRepository.findOne({ where: { id } });
  }

  /**
   * Remove um tipo de atividade com base em seu ID.
   * @param id O ID do tipo de atividade a ser removido.
   */
  async remove(id: number): Promise<void> {
    await this.activityTypeRepository.delete(id);
  }
}
