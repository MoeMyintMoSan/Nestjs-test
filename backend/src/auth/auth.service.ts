import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private userService: UsersService,
        private jwtService: JwtService,
    ) {}
    async validateUser(email: string, password: string): Promise<any> {
        const user = await this.userService.findOne(email);
        if (user && (await bcrypt.compare(password, user.password))){
            const { password, ...result} = user.toObject();
            return result;
        }return null;
    }

    async login(user: any) {
        const payload = {email: user.email,sub: user.id, role: user.role};
        return{
             access_token: this.jwtService.sign(payload)
        };           
    }
    
}
