import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ProductController } from './product/product.controller';

@Module({
  imports: [UsersModule],
  controllers: [AppController, ProductController],
  providers: [AppService],
})
export class AppModule {}
