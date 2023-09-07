import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Reservation } from "./reservation.entity";

@Entity({ name: "cars" })
export class Car {
  constructor(vin: string, make: string, model: string, price: number) {
    this.vin = vin;
    this.make = make;
    this.model = model;
    this.price = price;
  }
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: "vin", nullable: false })
  vin: string;

  @Column({ name: "make", nullable: false })
  make: string;

  @Column({ name: "model", nullable: false })
  model: string;

  @Column({ name: "price", nullable: false })
  price: number;

  @Column({ name: "created_at", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column({ name: "updated_at", default: () => "CURRENT_TIMESTAMP" })
  updatedAt: Date;

  @OneToMany((type) => Reservation, (reservation) => reservation.carId)
  reservations: Reservation[];
}
