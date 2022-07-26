import { MessageResponse } from '@interfaces/index';
import { Controller, Get } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { __Service } from '../service/__';
@ApiBearerAuth()
@ApiTags('country')
@Controller('country')
export class __Controller {
    constructor(private readonly _service: __Service) { }
    @Get()
    async getPaise(): Promise<MessageResponse> {
        return await this._service._List()
    }
}
