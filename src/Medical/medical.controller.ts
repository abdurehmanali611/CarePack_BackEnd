import { Body, Controller, Get, Param, Patch, Post, ValidationPipe } from "@nestjs/common";
import { MedicalService } from "./medical.service";
import { createMedicalDto } from "./Dto/createMedical.dto";
import { updateMedicalDto } from "./Dto/updateMedical.dto";

@Controller('medical')
export class medicalController {
    constructor(private MedicalService: MedicalService){}

    @Post()
    createMedical(@Body() createMedicalDto:createMedicalDto) {
        return this.MedicalService.createMedical(createMedicalDto)
    }

    @Get()
    fetchMedical() {
        return this.MedicalService.fetchMedical()
    }

    

    @Patch(':id')
    updatingMedical(@Param('id') id: string, @Body(new ValidationPipe({skipMissingProperties: true, whitelist: true, transform: true})) body: updateMedicalDto) {
        return this.MedicalService.updatingMedical(id, body)
    }
}