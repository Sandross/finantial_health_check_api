import { UsersRepository } from 'src/shared/database/repositories/users.repositories';
import { AuthenticateDto } from './dto/authenticate.dto';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AuthService {
    constructor(private readonly usersRepo: UsersRepository) {}
    async authenticate(authenticateDto: AuthenticateDto) {
        const { email } = authenticateDto;
        const user = await this.usersRepo.findUnique({
            where: { email }
        })

        if (!user) {
            throw new UnauthorizedException('Invalid credentials');
        }
        return { user }
    }
}
