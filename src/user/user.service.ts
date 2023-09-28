import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  get() {
    return { name: 'Shahjalal', age: 30 };
  }
  create(createUserDto: CreateUserDto) {
    return createUserDto;
  }
  update(updateUserDto: UpdateUserDto, param: { userId: number }) {
    return { body: updateUserDto, param };
  }
  show(param: { userId: number }) {
    return param;
  }
  delete(param: { userId: number }) {
    return param;
  }
}
