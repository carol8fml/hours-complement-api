/** Libs */
import { Injectable } from '@nestjs/common';

/** Entities */
import { User } from '../entities/user.entity';

@Injectable()
export class UserService {
  private users: User[] = [];
  private currentId = 1;

  /**
   * Cria um novo usuário.
   * @param user O usuário a ser criado.
   */
  create(user: User): User {
    user.id = this.currentId++;
    this.users.push(user);
    return user;
  }

  /**
   * Retorna todos os usuários cadastrados.
   */
  findAll(): User[] {
    return this.users;
  }

  /**
   * Retorna um usuário com base em seu ID.
   * @param id O ID do usuário a ser retornado.
   */
  findOne(id: number): User | undefined {
    return this.users.find((user) => user.id === id);
  }

  /**
   * Atualiza um usuário existente.
   * @param id O ID do usuário a ser atualizado.
   * @param user O usuário atualizado.
   */
  update(id: number, user: User): User | undefined {
    const index = this.users.findIndex((u) => u.id === id);
    if (index !== -1) {
      user.id = id;
      this.users[index] = user;
      return user;
    }
    return undefined;
  }

  /**
   * Remove um usuário com base em seu ID.
   * @param id O ID do usuário a ser removido.
   */
  remove(id: number): void {
    const index = this.users.findIndex((user) => user.id === id);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
  }
}
