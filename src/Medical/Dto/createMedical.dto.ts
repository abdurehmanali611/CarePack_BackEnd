import { Type } from "class-transformer";
import { IsBoolean, IsDate, IsNotEmpty, IsString } from "class-validator";

export class createMedicalDto {
    @IsBoolean()
    @IsNotEmpty()
    preHistory: boolean

    @IsString()
    doctorName: string

    @IsString()
    reason: string

    @IsString()
    symptoms: string

    @IsString()
    allergies: string

    @IsString()
    past_Medical_History: string

    @IsString()
    family_Medical_History: string

    @IsNotEmpty()
    @Type(() => Date)
    @IsDate()
    expected_Appointment_Date: Date

    @IsString()
    comments_Or_Notes: string

    @IsString()
    insurance_Provider: string

    @IsString()
    insurance_policy_Id: string

    @IsString()
    @IsNotEmpty()
    insurance_Or_Private: string

    @IsString()
    @IsNotEmpty()
    identity_Type: string

    @IsString()
    @IsNotEmpty()
    identity_Number: string

    @IsNotEmpty()
    @IsString()
    identity_photo: string

    @IsNotEmpty()
    @IsString()
    userId: string
}