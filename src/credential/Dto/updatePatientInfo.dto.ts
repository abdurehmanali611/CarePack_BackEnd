import { PartialType } from "@nestjs/mapped-types";
import { PatientInfoDto } from "./patientinfo.dto";

export class updatePatientInfo extends PartialType(PatientInfoDto) {}