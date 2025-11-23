import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './users/user.module';
import { medicalModule } from './Medical/medical.module';
import { credentialModule } from './credential/credential.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/CarePack'), UserModule, medicalModule, credentialModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
