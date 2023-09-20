/** Libs */
import { Module } from '@nestjs/common';

/** Services */
import { UserService } from './services/user.service';
import { DimensionService } from './services/dimension.service';
import { ActivityTypeService } from './services/activity-type.service';

/** Controllers */
import { UserController } from './controllers/user.controller';
import { DimensionController } from './controllers/dimension.controller';
import { ActivityTypeController } from './controllers/activity-type.controller';

@Module({
  controllers: [UserController, DimensionController, ActivityTypeController],
  providers: [UserService, DimensionService, ActivityTypeService],
})
export class AppModule {}
