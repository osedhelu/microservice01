import { MessageResponse } from '@interfaces/index';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class FileService {
  constructor() {}
  _List() {
    return 'hola mundo';
  }
}
