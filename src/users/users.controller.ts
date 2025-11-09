import { Body, Controller, Post } from "@nestjs/common";
import { userService } from "./users.service";
import { createUserDto } from "./Dto/createUser.dto";

@Controller('users')
export class userController {
    constructor(private userService: userService){}

    @Post()
    createUser(@Body() createUserDto: createUserDto) {
        console.log(createUserDto)
        return this.userService.createUser(createUserDto)
    }
}