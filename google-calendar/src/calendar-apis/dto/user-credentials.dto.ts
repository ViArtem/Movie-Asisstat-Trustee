import { IsDefined, IsOptional, IsString, Matches } from "class-validator";

export class UserCredentialsDto {
  @IsString({ message: "Value must be a string" })
  @Matches(/^(?!\s*$).+/, {
    message: "Value credentials must not consist of only spaces",
  })
  @IsDefined({ message: "Value name must be defined" })
  readonly credentials: string;
}
