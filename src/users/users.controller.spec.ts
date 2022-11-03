import { Test, TestingModule } from '@nestjs/testing';
import { Role } from '../common/enum/role.enum';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

const users = {
  id: '1',
  name: 'Shyam',
  username: 'Singh',
  email: 'abc@gmail.com',
  password: 'abc@123',
  role: Role.User,
};

describe('When UsersController', () => {
  let usersController: UsersController;
  let usersService: UsersService;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        UsersService,
        {
          provide: UsersService,
          useValue: {
            getAllUsers: jest.fn(() => []),
            getUserById: jest.fn(() => []),
            register: jest.fn(() => []),
            login: jest.fn(() => []),
            updateUser: jest.fn(() => []),
            deleteUser: jest.fn(() => []),
          },
        },
      ],
    }).compile();

    usersController = moduleRef.get<UsersController>(UsersController);
    usersService = moduleRef.get<UsersService>(UsersService);
  });

  it('usersController should be defined', () => {
    expect(usersController).toBeDefined();
    expect(usersController).not.toBeUndefined();
  });

  it('usersService should be defined', () => {
    expect(usersService).toBeDefined();
    expect(usersService).not.toBeUndefined();
  });

  describe('When getAllUsers', () => {
    describe('AND when there is data', () => {
      it('should return correct data', async () => {
        const getAllUsersSpy = jest
          .spyOn(usersService, 'getAllUsers')
          .mockResolvedValue([users]);
        const res = await usersController.getAllUsers();
        expect(res).toEqual([users]);
        expect(getAllUsersSpy).toHaveBeenCalled();
        expect(getAllUsersSpy).toHaveBeenCalledTimes(1);
      });
    });
    describe('AND when there is no data', () => {
      it('should return correct data', async () => {
        const getAllUsersSpy = jest
          .spyOn(usersService, 'getAllUsers')
          .mockResolvedValue([]);
        const res = await usersController.getAllUsers();
        expect(res).toEqual([]);
        expect(getAllUsersSpy).toHaveBeenCalled();
        expect(getAllUsersSpy).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe('When getUserById(1)', () => {
    describe('AND when there is data', () => {
      it('should return correct data', async () => {
        const getUserByIdSpy = jest
          .spyOn(usersService, 'getUserById')
          .mockResolvedValue([users]);
        const res = await usersController.getUserById(users.id);
        expect(res).toEqual([users]);
        expect(getUserByIdSpy).toHaveBeenCalled();
        expect(getUserByIdSpy).toHaveBeenCalledTimes(1);
      });
    });
    describe('AND when there is dno ata', () => {
      it('should return correct data', async () => {
        const getUserByIdSpy = jest
          .spyOn(usersService, 'getUserById')
          .mockResolvedValue([]);
        const res = await usersController.getUserById(users.id);
        expect(res).toEqual([]);
        expect(getUserByIdSpy).toHaveBeenCalled();
        expect(getUserByIdSpy).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe('When createUser', () => {
    describe('AND when there is data', () => {
      it('should return correct data', async () => {
        const createUserSpy = jest
          .spyOn(usersService, 'register')
          .mockResolvedValue(users);
        const res = await usersController.register(users);
        expect(res).toEqual(users);
        expect(createUserSpy).toHaveBeenCalled();
        expect(createUserSpy).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe('When login', () => {
    describe('AND when there is data', () => {
      it('should return correct data', async () => {
        const loginSpy = jest
          .spyOn(usersService, 'login')
          .mockResolvedValue(users);
        const res = await usersController.login(users);
        expect(res).toEqual(users);
        expect(loginSpy).toHaveBeenCalled();
        expect(loginSpy).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe('When updateUser', () => {
    describe('AND when there is data', () => {
      it('should return correct data', async () => {
        const updateUserSpy = jest
          .spyOn(usersService, 'updateUser')
          .mockResolvedValue(users);
        const res = await usersController.updateUser(users.id, users);
        expect(res).toEqual(users);
        expect(updateUserSpy).toHaveBeenCalled();
        expect(updateUserSpy).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe('When deleteUser(1)', () => {
    describe('AND when there is data', () => {
      it('should return correct data', async () => {
        const deleteUserSpy = jest
          .spyOn(usersService, 'deleteUser')
          .mockResolvedValue([users]);
        const res = await usersController.deleteUser(users.id);
        expect(res).toEqual([users]);
        expect(deleteUserSpy).toHaveBeenCalled();
        expect(deleteUserSpy).toHaveBeenCalledTimes(1);
      });
    });
  });
});
