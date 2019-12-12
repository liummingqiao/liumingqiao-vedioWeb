import { Controller, Get, Post } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { InjectModel } from 'nestjs-typegoose';
import { Course } from '@libs/db/model/course.model';
 

@ApiTags('视频接口')
@Controller('courses')
export class CoursesController {
    constructor(@InjectModel(Course)  private readonly model ){

    }

    @Get()
    @ApiOperation({
        summary: '获取全部视频列表'
    })
    async index(){
     return  await  this.model.find()
    }

    @Post()
    @ApiOperation({
        summary : '增加视频'
    })
    async cerat(@B){
        await 
    }
    

}
