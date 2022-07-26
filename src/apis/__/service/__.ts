import { MessageResponse } from '@interfaces/index';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { __ } from '../dto/__';

@Injectable()
export class __Service {
    constructor(@InjectModel(__.name) private readonly _schema: Model<__>) { }
    async _List(): Promise<MessageResponse> {
        try {
            const count = await this._schema.find().countDocuments();
            if (count >= 1) {
                const paises = await this._schema.find();
                return {
                    ok: true,
                    data: paises,
                };
            } else {
                // const paises = await this._schema.create(Paisjson);
                return {
                    ok: true,
                    data: [],
                };
            }
        } catch (err) {
            return {
                ok: false,
                message: err,
            };
        }
    }
}

