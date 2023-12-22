import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor(private readonly userService:UserService){}
    @Get("")
    getUsers(){
        return this.userService.getUsers()
    }
    //toujours de crée un ncontroller pour chaque fonction du service
    @Get('/:userId')
    getUser(@Param('userId')userId:string){
        return this.userService.getUser({
            userId 
        })
    }
}
