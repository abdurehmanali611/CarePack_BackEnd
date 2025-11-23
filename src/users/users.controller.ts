import { Body, Controller, Get, Post } from "@nestjs/common";
import { userService } from "./users.service";
import { createUserDto } from "./Dto/createUser.dto";

@Controller('users')
export class userController {
    constructor(private userService: userService){}

    @Post()
    createUser(@Body() createUserDto: createUserDto) {
        return this.userService.createUser(createUserDto)
    }

    @Get()
    fetchUser() {
        return this.userService.fetchUser()
    }
}