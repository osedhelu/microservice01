import { Test, TestingModule } from '@nestjs/testing';
import { MongooseModule } from '@nestjs/mongoose';
import { FarmController, Farms, FarmSchema, FarmService, FarmsModule } from '@apis/Farm/farm.module';
import { TestDatabaseModule } from '@tests/conextion/test-database.module.ts';
describe('Farm controller y service', () => {
  let service: FarmService;
  let controller: FarmController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TestDatabaseModule,
        MongooseModule.forFeature([{ name: Farms.name, schema: FarmSchema }]),
        FarmsModule

      ],
    })
      .compile()
    service = module.get<FarmService>(FarmService);
    controller = module.get<FarmController>(FarmController);
  });
  it("get farm", async () => {
    const aa = await service.list('', { limit: 10, page: 1 })
    expect(false).toBe(true)

  });
  it("Ciclaje", () => {

    expect(false).toBe(true)

  });
  it("Derrame mundial", async () => {

    expect(false).toBe(true)

  })
  it("Compra de NFT 1", async () => {

    expect(false).toBe(true)


  })
  it("Compra de NFT 2", async () => {

    expect(false).toBe(true)


  })
  it("Compra de NFT 3", async () => {

    expect(false).toBe(true)

  })
  it("Compra de NFT 4", async () => {

    expect(false).toBe(true)

  })
  it(" Tiburon", async () => {

    expect(false).toBe(true)

  })
  it("Clones", async () => {
    // cuando un usuario tiene 3 referidos directos

    expect(false).toBe(true)

  })
});
