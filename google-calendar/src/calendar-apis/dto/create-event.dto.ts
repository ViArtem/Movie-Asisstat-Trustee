import { IsDefined, IsString, Matches } from "class-validator";

export class CreateEventDto {
  @IsString({ message: "Value title must be a string" })
  @Matches(/^(?!\s*$).+/, {
    message: "Value title must not consist of only spaces",
  })
  @IsDefined({ message: "Value title must be defined" })
  readonly title: string;

  @IsString({ message: "Value title must be a string" })
  @Matches(/^(?!\s*$).+/, {
    message: "Value title must not consist of only spaces",
  })
  @IsDefined({ message: "Value title must be defined" })
  readonly startTime: string;

  @IsString({ message: "Value title must be a string" })
  @Matches(/^(?!\s*$).+/, {
    message: "Value title must not consist of only spaces",
  })
  @IsDefined({ message: "Value title must be defined" })
  readonly endTime: string;
}
