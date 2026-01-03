import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './users/user.module';
import { medicalModule } from './Medical/medical.module';
import { credentialModule } from './credential/credential.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://abdurehmanali611:35000642@cluster0.nk4lg.mongodb.net/CarePack?retryWrites=true&w=majority'), UserModule, medicalModule, credentialModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
