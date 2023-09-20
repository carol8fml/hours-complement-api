/** Libs */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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
  hoursLimit: number;
}
