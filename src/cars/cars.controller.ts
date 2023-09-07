import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  NotFoundException,
  ParseArrayPipe,
  ParseIntPipe,
} from "@nestjs/common";
import { CarsService } from "./cars.service";
import { CreateCarDto } from "./dto/create-car.dto";
import { UpdateCarDto } from "./dto/update-car.dto";
import { Query } from "@nestjs/common";
import { QueryDto } from "./dto/query-dto";

@Controller("cars") /** <-- this is the router path */
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  findAllCars(@Query() query: QueryDto) {
    var skip = 0;
    var take = 0;
    if (query.page && query.limit) {
      skip = (query.page - 1) * query.limit;
      take = query.limit;
    }

    try {
      return this.carsService.findAllAvailable(
        query.make,
        query.model,
        query.minPrice,
        query.maxPrice,
        query.startDate,
        query.endDate,
        skip,
        take,
      );
    } catch (error) {
      return NotFoundException;
    }
  }

  @Get(":id")
  findCar(@Param("id", ParseIntPipe) id: number, @Query("year") year: string) {
    try {
      return this.carsService.findOne(id);
    } catch (error) {
      return NotFoundException;
    }
  }

  @Post()
  createCar(@Body() createCarDto: CreateCarDto) {
    return this.carsService.create(createCarDto);
  }

  @Put(":id")
  updateCar(@Param("id") id: string, @Body() updateCarDto: UpdateCarDto) {
    return this.carsService.update(+id, updateCarDto);
  }

  @Delete(":id")
  deleteCar(@Param("id") id: string) {
    return this.carsService.remove(+id);
  }

  // @Post()
  // create(@Body() createCarDto: CreateCarDto) {
  //   return this.carsService.create(createCarDto);
  // }

  // @Get()
  // findAll() {
  //   return this.carsService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.carsService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateCarDto: UpdateCarDto) {
  //   return this.carsService.update(+id, updateCarDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.carsService.remove(+id);
  // }
}
