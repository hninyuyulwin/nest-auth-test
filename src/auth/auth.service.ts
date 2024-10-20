import { Injectable } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';


const fakeUsers = [
  {
    "id": 1,
    "username": "mason-mount",
    "password": "mount123"
  },
  {
    "id": 2,
    "username": "kai-hartvez",
    "password": "hartvez123"
  },
  {
    "id": 3,
    "username": "lana-delrey",
    "password": "delrey123"
  },
];

@Injectable()
export class AuthService {

  constructor(private jwtService : JwtService) {}
  
  validateUser({username,password} : AuthDto){
    const findUser = fakeUsers.find((user) => user.username === username);
    if (!findUser) return null;

    if(password === findUser.password){
      const {password, ...user} = findUser; 
      return this.jwtService.sign(user)
    }
  }
}
