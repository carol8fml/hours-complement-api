/** Libs */
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

/** Entities */
import { Dimension } from './dimension.entity';

@Entity()
export class ActivityType {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Nome do tipo de atividade.
   *
   * **Requisitos:**
   * * Obrigatório
   * * Limite de caracteres: 100
   */
  @Column({ length: 100, nullable: false })
  name: string;

  /**
   * Limite de horas para o tipo de atividade.
   *
   * **Requisitos:**
   * * Número inteiro
   */
  @Column({ type: 'integer', nullable: true })
  limitHours: number;

  /**
   * Dimensão à qual este tipo de atividade está relacionado.
   *
   * **Requisitos:**
   * * Relacionamento com a entidade Dimension
   */
  @ManyToOne(() => Dimension, (dimension) => dimension.activityTypes)
  dimension: Dimension;
}
