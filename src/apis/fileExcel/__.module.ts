import { Module } from '@nestjs/common';
import { FileController } from './controller/__';
import { FileService } from './service//__';

@Module({
  controllers: [FileController],
  providers: [FileService],
})
export class FileModule {}
