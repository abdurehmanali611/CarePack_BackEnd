import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { credentialService } from './credential.service';
import { createCredentialDto } from './Dto/createCredential.dto';
import { UpdateCredentialDto } from './Dto/updateCredential.dto';
import { updatePatientInfo } from './Dto/updatePatientInfo.dto';

@Controller('credential')
export class credentialController {
  constructor(private credentialservice: credentialService) {}

  @Post()
  createCredential(@Body() createCredentialDto: createCredentialDto) {
    return this.credentialservice.createCredential(createCredentialDto);
  }

  @Get()
  fetchingCredential() {
    return this.credentialservice.fetchingCredential();
  }

  // SPECIFIC ROUTES FIRST
  @Get('name/:name')
  async getUserByName(@Param('name') name: string) {
    return this.credentialservice.getUserByName(name);
  }

  @Get('id/:id')
  async getCredentialById(@Param('id') id: string) {
    return this.credentialservice.getCredentialById(id);
  }

  @Patch(':id')
  updatingCredential(
    @Param('id') id: string,
    @Body(
      new ValidationPipe({
        skipMissingProperties: true,
        whitelist: true,
        transform: true,
      }),
    )
    body: UpdateCredentialDto,
  ) {
    return this.credentialservice.updatingCredential(id, body);
  }

  @Patch('appointment-dates/:id')
  updateAppointmentDates(
    @Param('id') id: string,
    @Body() body: { AppointmentDates: Date[] },
  ) {
    return this.credentialservice.updateAppointmentDates(
      id,
      body.AppointmentDates,
    );
  }

  @Patch('patientInfos/:id')
  async patientInfosUpdate(
    @Param('id') id: string,
    @Body(
      new ValidationPipe({
        skipMissingProperties: true,
        whitelist: true,
        transform: true,
      }),
    )
    body: updatePatientInfo,
  ) {
    return this.credentialservice.updatePatientInfo(id, body);
  }

  @Delete(':id')
  deleteCredential(@Param('id') id: string) {
    return this.credentialservice.deletingCredential(id);
  }

  @Post('verify')
  async verifyCredentials(@Body() body: { passKey: string }) {
    return this.credentialservice.verifyCredentials(body.passKey);
  }
}
