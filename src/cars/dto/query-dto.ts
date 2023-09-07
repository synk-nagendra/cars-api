import { Transform } from "class-transformer";
import {
  IsBoolean,
  IsDate,
  IsNumber,
  IsNumberString,
  IsOptional,
} from "class-validator";
import {
  toBoolean,
  toLowerCase,
  toNumber,
  trim,
  toDate,
  toStringArray,
} from "../../helper/cast.helper";

export class QueryDto {
  @Transform(({ value }) => toNumber(value, { default: 1, min: 1 }))
  @IsNumber()
  @IsOptional()
  public page: number = 1;

  @Transform(({ value }) => toNumber(value, { default: 10, min: 1 }))
  @IsNumber()
  @IsOptional()
  public limit: number = 1;

  @Transform(({ value }) => toNumber(value, { default: 0, min: 0 }))
  @IsNumber()
  @IsOptional()
  public minPrice: number;

  @Transform(({ value }) => toNumber(value, { min: 1 }))
  @IsNumber()
  @IsOptional()
  public maxPrice: number;

  @Transform(({ value }) => toStringArray(trim(value)))
  @IsOptional()
  public make: [string];

  @Transform(({ value }) => toStringArray(trim(value)))
  @IsOptional()
  public model: [string];

  @Transform(({ value }) => toDate(value))
  @IsDate()
  public startDate: Date;

  @Transform(({ value }) => toDate(value))
  @IsDate()
  public endDate: Date;
}
