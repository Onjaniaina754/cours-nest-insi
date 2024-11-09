import { Type } from "class-transformer";
import { IsInt, IsOptional } from "class-validator";

export class GetUsersDtoParam {
    @IsOptional()
    @IsInt()
    @Type(() => Number)
    id?:number
  }
  