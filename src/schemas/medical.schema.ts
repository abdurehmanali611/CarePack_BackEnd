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
    symptoms: string

    @Prop()
    allergies: string

    @Prop()
    past_Medical_History: string

    @Prop()
    family_Medical_History: string

    @Prop()
    expected_Appointment_Date: Date

    @Prop()
    comments_Or_Notes: string

    @Prop()
    insurance_Provider: string

    @Prop()
    insurance_policy_Id: string

    @Prop()
    insurance_Or_Private: string

    @Prop()
    identity_Type: string

    @Prop()
    identity_Number: string

    @Prop()
    phoneNumber: string

    @Prop()
    identity_photo: string

    @Prop()
    userId: string
}

export const MedicalSchema = SchemaFactory.createForClass(Medical)