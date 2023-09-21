/** Libs */
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { config } from 'dotenv';

/** Carrega as variáveis de ambiente */
config();

const databaseConfig: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: process.env.DB_NAME,
  entities: [process.env.DB_ENTITIES],
  synchronize: true,
};

export default databaseConfig;
