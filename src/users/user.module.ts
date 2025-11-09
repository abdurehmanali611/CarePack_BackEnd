import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { user, userSchema } from 'src/schemas/user.schema';
import { userService } from './users.service';
import { userController } from './users.controller';

@Module({imports: [
    MongooseModule.forFeature([
        {
            name:user.name, 
            schema:userSchema
        }
    ])
],
providers: [userService],
controllers: [userController]
})
export class UserModule {

}