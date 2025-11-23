import { Type } from 'class-transformer';
import { IsArray, IsDate, IsNumber, IsOptional, IsString } from 'class-validator';

export class PatientInfoDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsNumber()
  age: number;

  @IsOptional()
  @IsString()
  reason: string;
  
  @IsOptional()
  @IsString()
  doctorName: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  symptoms: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  allergies: string[];

  @IsOptional()
  @IsString()
  past_Medical_History: string;

  @IsOptional()
  @IsString()
  family_Medical_History: string;

  @IsOptional()
  @Type(() => Date)
  @IsDate()
  AppointmentDate: Date;

  @IsOptional()
  @IsString()
  status: string

  @IsOptional()
  @IsNumber()
  schedulingNumber: number

  @IsOptional()
  @IsString()
  userId: string

  @IsOptional()
  @IsString()
  reasonChange: string

  @IsOptional()
  @IsString()
  recommend: string
}
