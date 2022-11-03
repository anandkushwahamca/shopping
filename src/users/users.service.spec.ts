import { JwtService } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let usersService: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        JwtService,
        {
          provide: UsersService,
          useFactory: () => ({
            find: jest.fn(() => []),
            findById: jest.fn(() => []),
            save: jest.fn(() => []),
            findOne: jest.fn(() => []),
            findByIdAndUpdate: jest.fn(() => []),
            remove: jest.fn(() => []),
          }),
        },
      ],
    }).compile();

    usersService = module.get<UsersService>(UsersService);
  });

  it('usersService should be defined', () => {
    expect(usersService).toBeDefined();
  });
});
