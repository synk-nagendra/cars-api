import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import {
  And,
  Repository,
  In,
  LessThanOrEqual,
  MoreThanOrEqual,
  MoreThan,
  LessThan,
  QueryBuilder,
} from "typeorm";
import { Car } from "./entities/car.entity";
import { CreateCarDto } from "./dto/create-car.dto";
import { UpdateCarDto } from "./dto/update-car.dto";
import { Reservation } from "./entities/reservation.entity";

@Injectable()
export class CarsService {
  constructor(
    @InjectRepository(Car) private readonly carRepository: Repository<Car>,
    @InjectRepository(Reservation)
    private readonly reservationRepository: Repository<Reservation>,
  ) {}

  create(createCarDto: CreateCarDto) {
    return "This action adds a new car";
  }

  async findAllAvailable(
    make: [string],
    model: [string],
    minPrice: number,
    maxPrice: number,
    startDate: Date,
    endDate: Date,
    skip: number,
    take: number,
  ) {
    //find all the overlapping reservations with the given date range

    const overlappingReservations = await this.carRepository
      .createQueryBuilder("car")
      .leftJoinAndSelect("car.reservations", "reservation")
      .distinct(true)
      .select("car.id")
      .where(
        "reservation.startDate >= :startDate and reservation.startDate < :endDate",
        { startDate: startDate, endDate: endDate },
      )
      .andWhere(
        "reservation.endDate <= :endDate and reservation.endDate > :startDate",
        { startDate: startDate, endDate: endDate },
      )
      .getMany();

    const bookedCars = overlappingReservations.map((car) => car.id);

    const availableCars = this.carRepository.createQueryBuilder("car");

    if (bookedCars.length > 0) {
      availableCars.where("car.id not in :bookedCars", {
        bookedCars: [bookedCars],
      });
    }
    if (make && make.length > 0) {
      availableCars.andWhere("car.make in :make", { make: [make] });
    }
    if (model && model.length > 0) {
      availableCars.andWhere("car.model in :model", { model: [model] });
    }
    if (minPrice && minPrice > 0) {
      availableCars.andWhere("car.price >= :minPrice", { minPrice: minPrice });
    }
    if (maxPrice && maxPrice > 0) {
      availableCars.andWhere("car.price <= :maxPrice", { maxPrice: maxPrice });
    }

    availableCars.orderBy("car.id", "ASC").skip(skip).take(take);

    return await availableCars.getManyAndCount();
  }

  async findOverlappingReservations(startDate: Date, endDate: Date) {
    const overlappingReservationsQ = await this.carRepository
      .createQueryBuilder("car")
      .leftJoinAndSelect("car.reservations", "reservation")
      .distinct(true)
      .select("car.id")
      .where(
        "reservation.startDate >= :startDate and reservation.startDate < :endDate",
        { startDate: startDate, endDate: endDate },
      )
      .andWhere(
        "reservation.endDate <= :endDate and reservation.endDate > :startDate",
        { startDate: startDate, endDate: endDate },
      )
      .getMany();

    const overlappingReservations = overlappingReservationsQ.map(
      (car) => car.id,
    );

    return overlappingReservations;
  }

  findOne(id: number): Promise<Car> {
    return this.carRepository.findOneBy({ id });
  }

  update(id: number, updateCarDto: UpdateCarDto) {
    return `This action updates a #${id} car`;
  }

  async remove(id: number): Promise<void> {
    await this.carRepository.delete(id);
  }
}
