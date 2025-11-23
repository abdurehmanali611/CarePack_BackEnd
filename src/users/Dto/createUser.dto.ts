import { IsDate, IsEmail, IsLowercase, IsNotEmpty, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class createUserDto {
    @IsNotEmpty()
    @IsString()
    Full_Name: string;
    @IsEmail()
    @IsNotEmpty()
    email: string;
    @IsNotEmpty()
    @IsString()
    phoneNumber: string;
    @IsNotEmpty()
    @Type(() => Date)
    @IsDate()
    birthDate: Date;
    @IsNotEmpty()
    @IsString()
    gender: string;
    @IsNotEmpty()
    @IsString()
    emergencyContactName: string;
    @IsNotEmpty()
    @IsString()
    emergencyContactPhone: string;
}