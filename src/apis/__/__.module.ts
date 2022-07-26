import { Module } from '@nestjs/common';
import { __Controller } from './controller/__';
import { __, __Schema } from './dto/__';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeatureAsync([{
    name: __.name, useFactory: () => {
      const schema = __Schema;
      schema.plugin(require('mongoose-unique-validator'), {
        message: "{PATH} debe de ser único",
      });
      return schema
    }
  }])
  ],
  controllers: [__Controller],
  providers: [__]
})
export class __Module { }
