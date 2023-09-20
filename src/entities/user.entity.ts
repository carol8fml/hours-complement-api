/** Libs */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Nome do usuário.
   *
   * **Requisitos:**
   * * Obrigatório
   * * Limite de caracteres: 50
   */
  @Column({ length: 50, nullable: false })
  name: string;

  /**
   * Número de matrícula do usuário.
   *
   * **Requisitos:**
   * * Obrigatório
   * * Único
   */
  @Column({ unique: true, nullable: false })
  registration: string;

  /**
   * Curso do usuário.
   *
   * **Requisitos:**
   * * Obrigatório
   * * Um dos valores: `GA` ou `SI`
   */
  @Column({ enum: ['GA', 'SI'], nullable: false })
  course: string;

  /**
   * Turno do usuário.
   *
   * **Requisitos:**
   * * Obrigatório
   * * Um dos valores: `M` ou `N`
   */
  @Column({ enum: ['M', 'N'], nullable: false })
  shift: string;

  /**
   * CPF do usuário.
   *
   * **Requisitos:**
   * * Obrigatório
   * * Único
   */
  @Column({ unique: true, nullable: false })
  cpf: string;

  /**
   * E-mail do usuário.
   *
   * **Requisitos:**
   * * Obrigatório
   * * Único
   * * Deve ser um e-mail válido
   */
  @Column({ unique: true, nullable: false })
  email: string;

  /**
   * Telefone do usuário.
   *
   * **Requisitos:**
   * * Obrigatório
   */
  @Column({ nullable: false })
  telephone: string;

  /**
   * Endereço do usuário.
   *
   * **Requisitos:**
   * * Opcional
   * * Limite de caracteres: 200
   */
  @Column({ length: 200, nullable: true })
  address: string;
}
