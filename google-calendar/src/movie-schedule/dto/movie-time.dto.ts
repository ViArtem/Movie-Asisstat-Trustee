import { Type } from "class-transformer";
import { ArrayMinSize, IsArray, IsDate, IsDefined } from "class-validator";

class DisplayTimeDto {
  @IsDate()
  @IsDefined()
  start: string;

  @IsDate()
  @IsDefined()
  end: string;
}

export class UserTimeDto {
  @IsArray()
  @ArrayMinSize(1, { message: "At least one item is required" })
  @Type(() => DisplayTimeDto)
  displayTime: DisplayTimeDto[];
}
