import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CriarRecadoDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(255)
  readonly texto: string;
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(25)
  readonly de: string;
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(255)
  readonly para: string;
}
