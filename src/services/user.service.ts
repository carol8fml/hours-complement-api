/** Libs */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

/** Entities */
import { User } from '../entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  /**
   * Cria um novo usuário.
   * @param user O usuário a ser criado.
   */
  async create(user: User): Promise<User> {
    return await this.userRepository.save(user);
  }

  /**
   * Retorna todos os usuários cadastrados.
   */
  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  /**
   * Retorna um usuário com base em seu ID.
   * @param id O ID do usuário a ser retornado.
   */
  async findOne(id: number): Promise<User | undefined> {
    return await this.userRepository.findOne({ where: { id: +id } });
  }

  /**
   * Atualiza um usuário existente.
   * @param id O ID do usuário a ser atualizado.
   * @param user O usuário atualizado.
   */
  async update(id: number, user: User): Promise<User | undefined> {
    await this.userRepository.update(id, user);
    return await this.userRepository.findOne({ where: { id: +id } });
  }

  /**
   * Remove um usuário com base em seu ID.
   * @param id O ID do usuário a ser removido.
   */
  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
