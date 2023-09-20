/** Libs */
import { Injectable } from '@nestjs/common';

/** Entities */
import { ActivityType } from '../entities/activity-type.entity';

@Injectable()
export class ActivityTypeService {
  private activityTypes: ActivityType[] = [];
  private currentId = 1;

  /**
   * Cria um novo tipo de atividade.
   * @param activityType O tipo de atividade a ser criado.
   */
  create(activityType: ActivityType): ActivityType {
    activityType.id = this.currentId++;
    this.activityTypes.push(activityType);
    return activityType;
  }

  /**
   * Retorna todos os tipos de atividade cadastrados.
   */
  findAll(): ActivityType[] {
    return this.activityTypes;
  }

  /**
   * Retorna um tipo de atividade com base em seu ID.
   * @param id O ID do tipo de atividade a ser retornado.
   */
  findOne(id: number): ActivityType | undefined {
    return this.activityTypes.find((activityType) => activityType.id === id);
  }

  /**
   * Atualiza um tipo de atividade existente.
   * @param id O ID do tipo de atividade a ser atualizado.
   * @param activityType O tipo de atividade atualizado.
   */
  update(id: number, activityType: ActivityType): ActivityType | undefined {
    const index = this.activityTypes.findIndex((at) => at.id === id);
    if (index !== -1) {
      activityType.id = id;
      this.activityTypes[index] = activityType;
      return activityType;
    }
    return undefined;
  }

  /**
   * Remove um tipo de atividade com base em seu ID.
   * @param id O ID do tipo de atividade a ser removido.
   */
  remove(id: number): void {
    const index = this.activityTypes.findIndex(
      (activityType) => activityType.id === id,
    );
    if (index !== -1) {
      this.activityTypes.splice(index, 1);
    }
  }
}
