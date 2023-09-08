import { Test, TestingModule } from "@nestjs/testing";
import { CarsController } from "./cars.controller";
import { CarsService } from "./cars.service";
import { getRepositoryToken } from "@nestjs/typeorm";
import { Car } from "./entities/car.entity";

describe("CarsController", () => {
  let controller: CarsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarsController],
      providers: [
        CarsService,
        {
          provide: getRepositoryToken(Car),
          useValue: {
            find: jest.fn().mockResolvedValue([]),
            save: jest.fn().mockResolvedValue([]),
          },
        },
      ],
    }).compile();

    controller = module.get<CarsController>(CarsController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
