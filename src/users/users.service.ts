import {
  BadRequestException,
  ConflictException,
  Injectable,
  Logger,
  NotAcceptableException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { SignUpDto } from './dto/user.signUp.dto';
import { Users, UsersDocuments } from './model/users.model';
import { MESSAGES } from '../common/constans/constans';
import { LoginUserDto } from './dto/user-login.dto';
import { UsersDTO } from './dto/users.dto';

@Injectable()
export class UsersService {
  logger = new Logger(UsersService.name);
  constructor(
    @InjectModel(Users.name)
    private readonly usersModel: Model<UsersDocuments>,
    private readonly jwtService: JwtService,
  ) {}

  async getAllUsers(): Promise<Users[]> {
    const users = await this.usersModel
      .find()
      .select('name username email role')
      .populate('profile')
      .exec();
    if (users.length) {
      return users;
    } else {
      this.logger.warn(MESSAGES.USER_NOT_FOUND);
      throw new NotFoundException(MESSAGES.USER_NOT_FOUND);
    }
  }

  async getUserById(userId: string): Promise<UsersDTO | object> {
    const user = await this.usersModel
      .findById(userId)
      .select('name username email role')
      .exec();
    if (user) {
      return user;
    } else {
      this.logger.warn(MESSAGES.USER_NOT_FOUND);
      throw new NotFoundException(MESSAGES.USER_NOT_FOUND);
    }
  }

  async register(signUpDto: SignUpDto): Promise<SignUpDto | object> {
    try {
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(signUpDto.password, salt);
      const users = await new this.usersModel({
        ...signUpDto,
        password: hashedPassword,
      }).save();
      if (users) {
        this.logger.log(MESSAGES.USER_CREATE);
        return { message: MESSAGES.USER_CREATE };
      } else {
        throw new NotFoundException(MESSAGES.USER_NOT_FOUND);
      }
    } catch (error) {
      this.logger.error(error.message);
      if (error?.code === MESSAGES.CODE_ALREADY_EXIST) {
        throw new ConflictException(MESSAGES.EMAIL_EXIST);
      } else if (error?.code === MESSAGES.CODE_NOT_NULL) {
        throw new NotAcceptableException(MESSAGES.EMAIL_NOT_NULL);
      } else if (error?._message === MESSAGES.CODE_ROLE) {
        throw new NotAcceptableException(MESSAGES.USER_INVALID_ROLE);
      } else {
        throw new BadRequestException();
      }
    }
  }

  async login(loginUserDto: LoginUserDto): Promise<LoginUserDto | object> {
    try {
      const user = await this.usersModel
        .findOne({ email: loginUserDto?.email })
        .exec();
      if (!user) {
        this.logger.warn(MESSAGES.AUTH_FAILED);
        throw new UnauthorizedException(MESSAGES.AUTH_FAILED);
      } else if (
        !(await bcrypt.compare(loginUserDto.password, user.password))
      ) {
        this.logger.warn(MESSAGES.AUTH_FAILED);
        throw new UnauthorizedException(MESSAGES.AUTH_FAILED);
      } else if (loginUserDto.email && loginUserDto.password) {
        const payload = { email: user.email, id: user.id };
        const token = await this.jwtService.signAsync(payload);
        return {
          accessToken: token,
        };
      } else {
        this.logger.warn(MESSAGES.AUTH_FAILED);
        throw new UnauthorizedException(MESSAGES.AUTH_FAILED);
      }
    } catch (error) {
      this.logger.error(error.message);
      throw new UnauthorizedException(MESSAGES.AUTH_FAILED);
    }
  }

  async updateUser(id: string, usersDTO: UsersDTO): Promise<UsersDTO | object> {
    const userInfo = await this.usersModel.findByIdAndUpdate(id, usersDTO);
    if (userInfo) {
      return { message: MESSAGES.UPDATE_SUCCESS };
    } else {
      this.logger.warn(MESSAGES.USER_NOT_FOUND);
      throw new NotFoundException(MESSAGES.USER_NOT_FOUND);
    }
  }

  async deleteUser(userId: string): Promise<UsersDTO | object> {
    const user = await this.usersModel.findById(userId);
    if (user?._id) {
      const deleteUser = await this.usersModel
        .remove({ _id: user?._id })
        .exec();
      if (deleteUser?.deletedCount) {
        return { message: MESSAGES.DELETE_SUCCESS };
      } else {
        this.logger.warn(MESSAGES.USER_NOT_FOUND);
        throw new NotFoundException(MESSAGES.USER_NOT_FOUND);
      }
    } else {
      this.logger.warn(MESSAGES.USER_NOT_FOUND);
      throw new NotFoundException(MESSAGES.USER_NOT_FOUND);
    }
  }
}
