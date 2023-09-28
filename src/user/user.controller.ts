import { UserService } from './user.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  getUsers() {
    return this.userService.get();
  }
  @Post()
  store(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }
  @Patch('/:userId')
  update(
    @Body() updateUserDto: UpdateUserDto,
    @Param() param: { userId: number },
  ) {
    return this.userService.update(updateUserDto, param);
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
