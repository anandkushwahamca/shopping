import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Role } from '../common/enum/role.enum';
import { Roles } from '../common/decorators/roles.decorator';
import { LoginUserDto } from './dto/user-login.dto';
import { SignUpDto } from './dto/user.signUp.dto';
import { UsersDTO } from './dto/users.dto';
import { UsersService } from './users.service';
import { RolesGuard } from '../auth/role-guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Roles(Role.Admin)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get()
  async getAllUsers(): Promise<UsersDTO[] | object> {
    return this.usersService.getAllUsers();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<UsersDTO | object> {
    return await this.usersService.getUserById(id);
  }

  @Post('register')
  async register(@Body() signUpDto: SignUpDto): Promise<SignUpDto | object> {
    return await this.usersService.register(signUpDto);
  }

  @Post('login')
  async login(@Body() loginUserDto: LoginUserDto): Promise<UsersDTO | object> {
    return await this.usersService.login(loginUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() usersDTO: UsersDTO,
  ): Promise<UsersDTO | object> {
    return await this.usersService.updateUser(id, usersDTO);
  }

  @Roles(Role.Admin)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<UsersDTO | object> {
    return await this.usersService.deleteUser(id);
  }
}
