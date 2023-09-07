import {
  Column,
  JoinColumn,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
} from "typeorm";
import { Car } from "./car.entity";

@Entity({ name: "reservations" })
export class Reservation {
  constructor(
    carId: number,
    startDate: Date,
    endDate: Date,
    totalPrice: number,
  ) {
    this.carId = carId;
    this.startDate = startDate;
    this.endDate = endDate;
    this.totalPrice = totalPrice;
  }
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: "start_date", nullable: false })
  startDate: Date;

  @Column({ name: "end_date", nullable: false })
  endDate: Date;

  @Column({ name: "total_price", nullable: false })
  totalPrice: number;

  @Column({ name: "created_at", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column({ name: "updated_at", default: () => "CURRENT_TIMESTAMP" })
  updatedAt: Date;

  @ManyToOne((type) => Car, (car) => car.id)
  @JoinColumn({ name: "car_id" })
  carId: number;
}
