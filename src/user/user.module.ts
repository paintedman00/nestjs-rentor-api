import { JwtStrategy } from './jwt.strategy';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserSchema } from '../schemas/user.model';
import { JwtModule, JwtService } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' })
    , JwtModule.register({
      secret: 'TopSecret',
      signOptions: {
        expiresIn: 3600
      }
    })
    , MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  controllers: [UserController],
  providers: [UserService, JwtStrategy],
  exports: [
    JwtStrategy,
    PassportModule
  ]
})
export class UserModule { }
