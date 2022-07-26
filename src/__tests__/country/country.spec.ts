import { Test, TestingModule } from '@nestjs/testing';
import { MongooseModule } from '@nestjs/mongoose';
import { TestDatabaseModule } from '@tests/conextion/test-database.module.ts';
import { country, CountryController, CountryModule, countrySchema, CountryService } from '@apis/country/country.module';
describe('Pruebas de Country', () => {
  let testingModule: TestingModule;
  let service: CountryService;
  let controller: CountryController;
  beforeEach(async () => {
    testingModule = await Test.createTestingModule({
      imports: [
        TestDatabaseModule,
        MongooseModule.forFeature([{ name: country.name, schema: countrySchema }]),
        CountryModule
      ],
    }).compile();
    service = testingModule.get<CountryService>(CountryService);
    controller = testingModule.get<CountryController>(CountryController)
  });
  it('Validar el total de paises', async () => {
    const aa = await service._List()
    console.log(aa.length)
    expect(aa.length).toBe(246);
  })
  // it('Editar un pais', async () => {

  // })
})