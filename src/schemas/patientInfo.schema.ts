import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class PatientInfo {
  @Prop({required: false}) name: string;
  @Prop({required: false}) age: number;
  @Prop({required: false}) reason: string;
  @Prop({required: false}) doctorName: string;
  @Prop([String]) symptoms: string[];
  @Prop([String]) allergies: string[];
  @Prop({required: false}) past_Medical_History: string;
  @Prop({required: false}) family_Medical_History: string;
  @Prop({required: false}) AppointmentDate: Date;
  @Prop({required: false}) status: string
  @Prop({required: false}) schedulingNumber: number
  @Prop({required: false}) userId: string
  @Prop({required: false}) reasonChange: string
  @Prop({required: false}) recommend: string
}
export const PatientInfoSchema = SchemaFactory.createForClass(PatientInfo);
