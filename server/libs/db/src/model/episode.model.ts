import { prop } from '@typegoose/typegoose'
import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator'

export class Episode {
    @ApiModelProperty({description:'课程名称'})
    @prop()
    name: string

    @ApiModelProperty({description:'封面图'})
    @prop()
    file: string
}