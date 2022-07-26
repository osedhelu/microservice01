import { Test, TestingModule } from '@nestjs/testing';
import { MongooseModule } from '@nestjs/mongoose';
import { TestDatabaseModule } from '@tests/conextion/test-database.module.ts';
import { user, UserController, UserModule, UserSchema, UserService } from '@apis/user/user.module';
describe('Prueba de usuarios', () => {
  let testingModule: TestingModule;
  let service: UserService;
  let controller: UserController;
  beforeEach(async () => {
    testingModule = await Test.createTestingModule({
      imports: [
        TestDatabaseModule,
        MongooseModule.forFeature([{ name: user.name, schema: UserSchema }]),
        UserModule
      ],
    }).compile();
    service = testingModule.get<UserService>(UserService);
    controller = testingModule.get<UserController>(UserController);

  });
  it('Total de usuario deben a ver 14', async () => {
    const aa = await service.findAll()
    console.log(aa.length)
    expect(aa.length).toBe(14);
  })
})