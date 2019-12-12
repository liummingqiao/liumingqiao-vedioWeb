import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from '@libs/db';
import { UsersModule } from './users/users.module';
import { CoursesController } from './courses/courses.controller';
import { CoursesModule } from './courses/courses.module';

@Module({
  imports: [
    DbModule,
    UsersModule,
    CoursesModule 
  ],
  controllers: [AppController, CoursesController],
  providers: [AppService],
})
export class AppModule {}
