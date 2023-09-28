import { UserService } from './user.service';
import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import { Request } from 'express';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  getUsers() {
    return this.userService.get();
  }
  @Post()
  store(@Req() req: Request) {
    return this.userService.create(req);
  }
  @Patch('/:userId')
  update(@Req() req: Request, @Param() param: { userId: number }) {
    return this.userService.update(req , param);
  }
  @Get('/:userId')
  getUser(@Param() param: { userId: number }) {
    return this.userService.show(param);
  }
  @Delete('/:userId')
  deleteUser(@Param() param: { userId: number }) {
    return this.userService.delete(param);
  }
}

// @Get()
//     getUsers(){
//         return "I am user";
//     }
//     @Post()
//     store(@Req() req:Request){
//         return req.body;
//     }
//     @Patch()
//     update(@Req() req:Request){
//         return req.body;
//     }
//     @Get("/:userId")
//     getUser(@Param() params:{userId:number}){
//         return params
//     }
//     @Delete("/:userId")
//     deleteUser(@Param() params:{userId:number}){
//         return params
//     }
