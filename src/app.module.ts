import { Module } from '@nestjs/common';
import { keyDownloadModule } from './apis/keyDownload/keyDownload.module';
import { FileModule } from './apis/fileExcel/__.module';
@Module({
  imports: [keyDownloadModule, FileModule],
})
export class AppsModule {}
