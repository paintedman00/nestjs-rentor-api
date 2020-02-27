import { UserService } from './user.service';
import { JwtPayload } from './jwt-payload.interface';
import { Injectable, NotFoundException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt'
@Injectable()

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'TopSecret',
    })
  }

  // async validate(payload: JwtPayload) {
  //   const { username } = payload
  //   const user = await this.userService({ username });
  //   if (!user) {
  //     throw new NotFoundException('user does not exist');
  //   }
  //   return user
  // }

}