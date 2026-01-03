import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Medical, MedicalSchema } from "../schemas/medical.schema";
import { MedicalService } from "./medical.service";
import { medicalController } from "./medical.controller";

@Module({
    imports: [MongooseModule.forFeature([
        {
            name: Medical.name,
            schema: MedicalSchema
        }
    ])],
    providers: [MedicalService],
    controllers: [medicalController]
})
export class medicalModule {

}