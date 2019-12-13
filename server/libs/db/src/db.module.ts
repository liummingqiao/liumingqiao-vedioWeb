import { Module, Global } from '@nestjs/common';
import { DbService } from './db.service';
import { TypegooseModule } from 'nestjs-typegoose'
import { from } from 'rxjs';
import { User } from './model/user.model';
import {Episode} from './model/episode.model';
import {Course} from './model/course.model';


const models = TypegooseModule.forFeature([
  User,
  Episode,
  Course
])
 

@Global()
@Module({
  imports: [
    TypegooseModule.forRoot('mongodb://localhost/topfullstack', {
      //避免 报一些错误提示，避免使用错误方法
      useCreateIndex: true,
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true
    }),
    models
  ],
  providers: [DbService],
  exports: [DbService,models],
})
export class DbModule { }
