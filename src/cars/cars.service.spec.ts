import { Test, TestingModule } from "@nestjs/testing";
import { CarsService } from "./cars.service";
import { getRepositoryToken } from "@nestjs/typeorm";
import { Car } from "./entities/car.entity";

describe("CarsService", () => {
  let service: CarsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
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

    service = module.get<CarsService>(CarsService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
