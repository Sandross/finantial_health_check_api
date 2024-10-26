import { Body, Controller, Post, SetMetadata } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SigninDto } from './dto/signin';
import { SignupDto } from './dto/signup';
import IsPublic from 'src/shared/decorators/IsPublic'; 



@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  @IsPublic()
  authenticate(@Body() authenticateDto: SigninDto) {
    return this.authService.signin(authenticateDto)
  }

  @Post('signup')
  @IsPublic()
  create(@Body() signupDto: SignupDto) {
    return this.authService.signup(signupDto);
  }
}
