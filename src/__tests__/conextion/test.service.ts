import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TestService {
    constructor(
        @InjectModel('test') private readonly test: Model<any>,
    ) { }
}