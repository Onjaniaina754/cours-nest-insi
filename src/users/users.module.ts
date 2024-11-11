import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserModule } from './user/user.module';
import { UserService } from './providers/users.service';

@Module({
  controllers: [UsersController],
  imports: [UserModule],
  providers: [UserService]
})
export class UsersModule {}
