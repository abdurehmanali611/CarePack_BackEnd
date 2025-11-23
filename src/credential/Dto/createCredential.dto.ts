import { Type } from "class-transformer";
import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from "class-validator";
import { PatientInfoDto } from "./patientinfo.dto";

export class createCredentialDto {

    @IsNotEmpty()
    @IsString()
    Full_Name: string

    @IsNotEmpty()
    @IsString()
    Sex: string

    @IsString()
    @IsOptional()
    Speciality?: string

    @IsNotEmpty()
    @IsNumber()
    experienceYear: number

    @IsNotEmpty()
    @IsString()
    passKey: string

    @IsNotEmpty()
    @IsString()
    roleType: string

    @IsNotEmpty()
    @IsString()
    image: string

    @IsOptional()
    @Type(() => Date)
    @IsDate({each: true})
    AppointmentDates?: Date[]

    @IsOptional()
    @ValidateNested({each: true})
    @Type(() => PatientInfoDto)
    patientInfos?: PatientInfoDto[]
}