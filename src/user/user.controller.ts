import { Controller, Post, Get, Patch, Delete, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post('register')
  async addGenre(
    @Body('name') userName: string,
    @Body('email') email: string,
    @Body('password') password: string) {
    const user = await this.userService.addUser(userName, email, password);
    return user;
  }

  @Get()
  async getAllUsers() {
    const users = await this.userService.getAllUsers();
    return users
  }

  @Post('login')
  async login(@Body('username') username: string, @Body('password') password: string) {
    const result = await this.userService.login(username, password);
    return result;
  }
}


