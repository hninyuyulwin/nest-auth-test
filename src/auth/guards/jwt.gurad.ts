import { ExecutionContext } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Observable } from "rxjs";

export class JwtAuthGurad extends AuthGuard('jwt'){
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    console.log("Inside Jwt AuthGuard canActivate");
      
    return super.canActivate(context)
  }
}