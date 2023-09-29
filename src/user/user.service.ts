import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  get(): Promise<User[]> {
    return this.usersRepository.find();
  }
  create(createUserDto: CreateUserDto) {
    return this.usersRepository.save(createUserDto);
  }
  update(updateUserDto: UpdateUserDto, userId: number) {
    return this.usersRepository.update(userId, updateUserDto);
  }
  show(userId: number) {
    return this.usersRepository.findOneBy({ id: userId });
  }
  delete(userId: number) {
    return this.usersRepository.delete(userId);
  }
}
