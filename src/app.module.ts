/** Libs */
import { Module } from '@nestjs/common';

/** Services */
import { UserService } from './services/user.service';

/** Controllers */
import { UserController } from './controllers/user.controller';

@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
