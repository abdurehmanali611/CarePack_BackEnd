import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({timestamps: true})
export class user {
  @Prop({required: true})
  Full_Name: string;

  @Prop({required: false})
  email: string;

  @Prop({required: true})
  phoneNumber: string;

  @Prop({required: true})
  birthDate: Date;

  @Prop({required: true})
  gender: string;

  @Prop({required: true})
  emergencyContactName: string;

  @Prop({required: true})
  emergencyContactPhone: string;
}

export const userSchema = SchemaFactory.createForClass(user)