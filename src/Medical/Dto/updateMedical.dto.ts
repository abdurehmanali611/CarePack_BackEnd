import { PartialType } from "@nestjs/mapped-types";
import { createMedicalDto } from "./createMedical.dto";

export class updateMedicalDto extends PartialType(createMedicalDto) {}