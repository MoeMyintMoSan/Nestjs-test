import { Body,Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './schemas/user.schema';
import { UseGuards } from '@nestjs/common';
import { AdminGuard } from '../guards/admin.guard';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    async create(@Body() user:User){
        return this.usersService.create(user);
    }

    @Get()
    async findAll(){
        return this.usersService.findAll();
    }
    @UseGuards(AdminGuard)
    @Delete(':id')
    async delete(@Param('id') id:string){
        return this.usersService.delete(id);
    }
}
