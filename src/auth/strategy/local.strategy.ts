import {  Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './../auth.service';
import { PassportStrategy } from "@nestjs/passport";
import {Strategy} from 'passport-local';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
  constructor (private authService: AuthService){
    super();
  }

  validate(username : string, password : string){
    console.log("Inside local strategy");
    
    const user = this.authService.validateUser({username,password});
    if(!user) throw new UnauthorizedException();
    return user;
  }
}