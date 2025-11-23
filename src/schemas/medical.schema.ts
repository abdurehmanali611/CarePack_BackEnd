import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Medical {
    @Prop()
    preHistory: boolean

    @Prop()
    doctorName: string

    @Prop()
    reason: string

    @Prop()
    symptoms: Array<string>

    @Prop()
    allergies: Array<string>

    @Prop()
    past_Medical_History: string

    @Prop()
    family_Medical_History: string

    @Prop()
    expected_Appointment_Date: Date

    @Prop()
    comments_Or_Notes: string

    @Prop()
    identity_Type: string

    @Prop()
    identity_Number: string

    @Prop()
    identity_photo: string

    @Prop()
    userId: string

    @Prop()
    status: string

    @Prop({required: false})
    cancellingReason?: string

    @Prop()
    schedulingNumber: number

    @Prop()
    Disease?: string

    @Prop()
    Doctor?: string
}

export const MedicalSchema = SchemaFactory.createForClass(Medical)