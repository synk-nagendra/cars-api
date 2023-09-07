import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CarsModule } from "./cars/cars.module";
import { DataSource } from "typeorm";
import { Car } from "./cars/entities/car.entity";
import { Reservation } from "./cars/entities/reservation.entity";

@Module({
  imports: [
    CarsModule,
    ConfigModule.forRoot({
      envFilePath: `./${process.env.NODE_ENV}.env`,
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "jhdksjf63794dnf6536",
      database: "cars_db",
      //entities: [Car, Reservation],
      synchronize: false,
      autoLoadEntities: true,
      //timezone: "Z",
      timezone: "+10:00",
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
