import { Module } from '@nestjs/common';
import { keyDownloadController } from './controller/keyDownloadController';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [keyDownloadController],
})
export class keyDownloadModule { }
