import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './users/user.module';
import { medicalModule } from './Medical/medical.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/CarePack'), UserModule, medicalModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
