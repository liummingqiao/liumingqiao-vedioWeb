import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam, ApiProperty } from '@nestjs/swagger';
import {ApiModelProperty} from '@nestjs/swagger/dist/decorators/api-model-property.decorator'
import { IsNotEmpty } from 'class-validator'
import { from } from 'rxjs';
import { InjectModel } from 'nestjs-typegoose';
import { model } from 'mongoose';
import { User } from '@libs/db/model/user.model';

class CreatPostDto {
    // @ApiModelProperty({ description: '名字', example: '名字1' })
    // @IsNotEmpty({ message: '请填写标题' })
    @ApiProperty({
        description: '用户名',
        example:'名字1',
       
    })
    
    username: string
    // @ApiModelProperty({ description: '密码' ,example: '帖子内容'})
    @ApiProperty({
        description:"密码",
        example:'密码1'
    })
    passworld: string
}

@Controller('users')
@ApiTags('用户接口')



export class UsersController {
    constructor(
        @InjectModel(User) private readonly model
    ) {
    }
    @Get()
    @ApiOperation({
        summary: '显示博客列表'
    })
    async index() {
        return await this.model.find()
    }

    @Post()
    @ApiOperation({
        summary: '添加帖子'
    })
    async create(@Body() creatPostDto: CreatPostDto) {
        await this.model.create(creatPostDto)
        return {
            success: true,
        }
    }

    @Get(':id')
    @ApiOperation({
        summary: '查看详细帖子'
    })
    async detail(@Param('id') id: string) {

        return await  this.model.findById(id) 
        
    }

    @Put(':id')
    @ApiOperation({
        summary: '编辑帖子'
    })
    async  update(@Param('id') id: string, @Body() updatePostDto: CreatPostDto) {
        await this.model.findByIdAndUpdate(id, updatePostDto)
        return {
            success: true
        }
    }

    @Delete(':id')
    @ApiOperation({
        summary: '删除帖子'
    })
    async remove(@Param('id') id: string) {
        await this.model.findByIdAndDelete(id)
        return {
            success: true
        }
    }

}
