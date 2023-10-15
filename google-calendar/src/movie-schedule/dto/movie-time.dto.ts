import { Type } from "class-transformer";
import {
  ArrayMinSize,
  ValidateNested,
  IsArray,
  IsDefined,
  Matches,
  IsDateString,
} from "class-validator";

export class UserTimeDto {
  @IsArray({ message: "displayTime must be an array" })
  @ValidateNested({ each: true })
  @ArrayMinSize(1, { message: "displayTime least one item is required" })
  @Type(() => DisplayTimeDto)
  displayTime: DisplayTimeDto[];
}

class DisplayTimeDto {
  @IsDateString()
  @Matches(/^(?!\s*$).+/, {
    message: "Value start must not consist of only spaces",
  })
  @IsDefined({ message: "Value start must be defined" })
  start: string;

  @IsDateString()
  @Matches(/^(?!\s*$).+/, {
    message: "Value end must not consist of only spaces",
  })
  @IsDefined({ message: "Value end must be defined" })
  end: string;
}
