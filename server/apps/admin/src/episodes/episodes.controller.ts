import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ApiTags, ApiProperty, ApiOperation } from '@nestjs/swagger';
import { Episode } from '@libs/db/model/episode.model';
import { InjectModel } from 'nestjs-typegoose';
import { Query } from 'mongoose';
// import {episode} from ''
class epiDto {

    @ApiProperty(  {
        description: '用户名',
        example:'名字1',
    })
    name:String

    @ApiProperty({
    description:'封面',
    example :'封面1'    
    })
    file: string

}


@ApiTags('内部接口')
@Controller('episodes')

export class EpisodesController {
     constructor(@InjectModel(Episode) private readonly model){}

     @Get()
     @ApiOperation({
         summary:'查看所有'
     })
    async index(){
        return await this.model.find()
     }

     @Post()
     @ApiOperation({
         summary: '添加'
     })
     async create ( @Body() body:epiDto){
         this.model.create(body)
     }

     @Put(':id')
     @ApiOperation({
         summary : '修改'
     })
     async delite(@Param('id') id ,   @Body() Updatebody:epiDto){
        this.model.findByIdAndUpdate(id,Updatebody)
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
