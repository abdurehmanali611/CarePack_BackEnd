import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { PatientInfo, PatientInfoSchema } from "./patientInfo.schema";

@Schema()
export class Credential {
    @Prop({required: true, unique: true})
    Full_Name: string

    @Prop({required: true})
    Sex: string

    @Prop({required: false})
    Speciality?: string

    @Prop({required: true})
    experienceYear: number

    @Prop({unique: true, required: true})
    passKey: string

    @Prop({required: true})
    roleType: string

    @Prop()
    image: string

    @Prop([Date])
    AppointmentDates?: Date[]

    @Prop({type: [PatientInfoSchema], default: []})
    patientInfos?: PatientInfo[]
}

export const credentialSchema = SchemaFactory.createForClass(Credential)