import { Body, Controller, HttpException, Post, Req, Request, UseGuards } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { AuthService } from './auth.service';
import { LocalGuard } from './guards/local.guard';
import { JwtAuthGurad } from './guards/jwt.gurad';

@Controller('auth')
export class AuthController {

  constructor(private authService : AuthService) {
    
  }
  
  @Post('login')
  // @UseGuards(AuthGuard('local'))
  @UseGuards(LocalGuard)
  // login(@Body() authPayLoad: AuthDto){
  login(@Request() req : Request,@Body() authPayLoad: AuthDto){
    const user = this.authService.validateUser(authPayLoad);
    // if(!user) throw new HttpException("Invalid Credential",401);
    return user;
  }

  @Get('status')
  @UseGuards(JwtAuthGurad)
  status(@Req() req: Request){
    console.log('Inside Authcontroller status method');
    console.log(req.user);
    return req.user;
  }
}
