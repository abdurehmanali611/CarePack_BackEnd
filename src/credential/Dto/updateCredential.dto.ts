import { PartialType } from '@nestjs/mapped-types'
import { createCredentialDto } from "./createCredential.dto";

export class UpdateCredentialDto extends PartialType(createCredentialDto) {}