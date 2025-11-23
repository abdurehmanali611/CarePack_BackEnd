import { Type } from "class-transformer";
import { IsArray, IsBoolean, IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class createMedicalDto {
    @IsBoolean()
    @IsNotEmpty()
    preHistory: boolean

    @IsString()
    doctorName: string

    @IsString()
    reason: string

    @IsArray()
    symptoms: Array<string>

    @IsArray()
    allergies: Array<string>

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

    @IsNotEmpty()
    @IsString()
    status: string

    @IsOptional()
    @IsString()
    cancellingReason: string

    @IsNumber()
    @IsNotEmpty()
    schedulingNumber: number

    @IsString()
    @IsOptional()
    Disease?: string

    @IsString()
    @IsOptional()
    Doctor?: string
}