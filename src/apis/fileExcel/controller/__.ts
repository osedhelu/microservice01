import { MessageResponse } from '@interfaces/index';
import { Controller, Get } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { FileService } from '../service/__';
@ApiBearerAuth()
@ApiTags('file')
@Controller('file')
export class FileController {
  constructor(private readonly _service: FileService) {}
  @Get()
  async getPaise(): Promise<string> {
    return await this._service._List();
  }
}
