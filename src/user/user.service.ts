import { UserSchema } from './../schemas/user.model';
import { Model } from 'mongoose';
import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../schemas/user.model'
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>,
    private jwtService: JwtService) { }

  async addUser(name: string, email: string, password: string) {
    let user = new this.userModel({ name, email, password });
    const result = await user.save();
    return result;
  }

  async getAllUsers() {
    const users = await this.userModel.find();
    return users;
  }

  async login(username, password) {
    const user = await this.userModel.findOne({
      name: username
    });
    if (!user) {
      throw new NotFoundException('user does not exist');
    } else {
      if (password !== user.password) {
        throw new UnauthorizedException('invalid credentials');
      }
    }

    return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIn0.Gfx6VO9tcxwk6xqx9yYzSfebfeakZp5JYIgP_edcw_A'
    // const payload = { username }
    // const accessToken = this.jwtService.sign(payload);
    // return { accessToken }
  }
}

