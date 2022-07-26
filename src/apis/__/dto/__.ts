import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
export type UserDocument = __ & Document;

@Schema({ versionKey: false })
export class __ {
  @Prop({
    type: String, required: false
  })
  nombre: string;
  @Prop({
    type: String, required: false
  })// TODO: .................... nombre
  name: string;
  @Prop({
    type: String, required: false
  })
  nom: string;
  @Prop({
    type: String, required: false
  })
  iso2: string;
  @Prop({
    type: String, required: false
  })
  iso3: string;
  @Prop({
    type: String, required: false
  })
  phone_code: string;
}

export const __Schema = SchemaFactory.createForClass(__);

