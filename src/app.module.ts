/** Libs */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

/** Services */
import { UserService } from './services/user.service';
import { DimensionService } from './services/dimension.service';
import { ActivityTypeService } from './services/activity-type.service';

/** Controllers */
import { UserController } from './controllers/user.controller';
import { DimensionController } from './controllers/dimension.controller';
import { ActivityTypeController } from './controllers/activity-type.controller';

/** Entities */
import { User } from './entities/user.entity';

/** Database */
import databaseConfig from 'database.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(databaseConfig),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [UserController, DimensionController, ActivityTypeController],
  providers: [UserService, DimensionService, ActivityTypeService],
})
export class AppModule {}
