import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { user } from "../schemas/user.schema";
import { createUserDto } from "./Dto/createUser.dto";

@Injectable()
export class userService {
    constructor(
        @InjectModel(user.name) private userModel:Model<user>) {}
    createUser(createUserDto: createUserDto) {
        const newUser = new this.userModel(createUserDto)
        return newUser.save()
    }

    fetchUser() {
        return this.userModel.find().exec()
    }
    
}