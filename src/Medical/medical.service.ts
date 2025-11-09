import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Medical } from "src/schemas/medical.schema";
import { createMedicalDto } from "./Dto/createMedical.dto";

@Injectable()
export class MedicalService {
    constructor(@InjectModel(Medical.name) private medicalModel:Model<Medical>){}
    createMedical(createMedicalDto:createMedicalDto) {
        const newMedical = new this.medicalModel(createMedicalDto)
        return newMedical.save()
    }
}