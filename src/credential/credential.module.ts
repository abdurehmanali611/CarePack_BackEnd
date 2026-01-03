import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Credential, credentialSchema } from "../schemas/credential.schema";
import { credentialService } from "./credential.service";
import { credentialController } from "./credential.controller";

@Module({
    imports: [MongooseModule.forFeature([
        {
            name: Credential.name,
            schema: credentialSchema
        }
    ])],
    providers: [credentialService],
    controllers: [credentialController]
})
export class credentialModule {

}