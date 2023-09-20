/** Libs */
import { Module } from '@nestjs/common';

/** Services */
import { UserService } from './services/user.service';
import { DimensionService } from './services/dimension.service';

/** Controllers */
import { UserController } from './controllers/user.controller';
import { DimensionController } from './controllers/dimension.controller';

@Module({
  controllers: [UserController, DimensionController],
  providers: [UserService, DimensionService],
})
export class AppModule {}
