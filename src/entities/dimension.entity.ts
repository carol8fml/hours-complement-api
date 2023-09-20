/** Libs */
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

/** Entities */
import { ActivityType } from './activity-type.entity';

@Entity()
export class Dimension {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Nome da dimensão.
   *
   * **Requisitos:**
   * * Obrigatório
   * * Limite de caracteres: 50
   */
  @Column({ length: 50, nullable: false })
  name: string;

  /**
   * Limite de horas para a dimensão.
   *
   * **Requisitos:**
   * * Obrigatório
   * * Número inteiro
   */
  @Column({ type: 'integer', nullable: false })
  limitHours: number;

  /**
   * Tipos de atividades relacionados a esta dimensão.
   *
   * **Requisitos:**
   * * Relacionamento com a entidade ActivityType
   */
  @OneToMany(() => ActivityType, (activityType) => activityType.dimension)
  activityTypes: ActivityType[];
}
