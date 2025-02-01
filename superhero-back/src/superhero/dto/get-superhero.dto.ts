import { IsNumber, Min, Max, IsString } from 'class-validator';

export class GetSuperheroDto {
  @IsString()
  name: string;

  @IsString()
  superpower: string;

  @IsNumber({}, { message: 'Not a valid number' })
  @Min(0, { message: 'Number must be greater than or equal to 0' })
  @Max(10, { message: 'Number must be less than or equal to 10' })
  humilityScore: number;
}
