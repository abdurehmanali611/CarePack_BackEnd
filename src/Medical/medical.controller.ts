import { Body, Controller, Post } from "@nestjs/common";
import { MedicalService } from "./medical.service";
import { createMedicalDto } from "./Dto/createMedical.dto";

@Controller('medical')
export class medicalController {
    constructor(private MedicalService: MedicalService){}

    @Post()
    createMedical(@Body() createMedicalDto:createMedicalDto) {
        return this.MedicalService.createMedical(createMedicalDto)
    }
}