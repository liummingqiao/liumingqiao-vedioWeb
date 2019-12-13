import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiProperty } from '@nestjs/swagger';
import { InjectModel } from 'nestjs-typegoose';
import { Course } from '@libs/db/model/course.model';
import { request } from 'http';
import { ReturnModelType } from '@typegoose/typegoose';

class CoursesDto {
    @ApiProperty({
        description: '用户名',
        example:'名字1',
       
    })
    
    name: string
    // @ApiModelProperty({ description: '密码' ,example: '帖子内容'})
    @ApiProperty({
        description:"课程",
        example:'课程1'
    })
    cover: string
}  

@ApiTags('视频接口')
@Controller('courses')
export class CoursesController {
    constructor(@InjectModel(Course) private readonly model: ReturnModelType<typeof Course>) {

    }

    @Get()
    @ApiOperation({
        summary: '获取全部视频列表'
    })
    async index() {
        return await this.model.find()
    }

    @Post()
    @ApiOperation({
        summary: '增加视频'
    })
    async cerat(@Body() coursesNum : CoursesDto) {
        await this.model.create(coursesNum)
    }




    @Put(':id')
    @ApiOperation({
        summary : '修改视频'
    })
    async update(@Param('id') id : String  , @Body() UpdateData :CoursesDto){
         await this.model.findByIdAndUpdate(id,UpdateData)
         return {
             success: true
         }
    }

    @Get(':id')
    @ApiOperation({
        summary:'查看视频详情'
    })
    async  detail(@Param('id') id:String ){
        await this.model.findById(id)
    }
    
    @Delete(':id')
    @ApiOperation({
        summary : '删除视频'
    })
    async remove(@Param('id') id: String){
        await this.model.findByIdAndDelete(id)
        return {
              success : true
        }
    }
}
