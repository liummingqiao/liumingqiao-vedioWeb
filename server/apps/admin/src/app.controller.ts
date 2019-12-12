import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
// import {ApiUseTags}  from '@nestjs/swagger'
import { ApiTags, ApiOperation } from '@nestjs/swagger';


@Controller()
@ApiTags('默认标签')
export class AppController {
  // constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({
    summary:'这是一个测试接口'
  }) 
  haha(){
    return 'index'
  }
  // getHello(): string {
  //   return this.appService.getHello();
  // }
}
