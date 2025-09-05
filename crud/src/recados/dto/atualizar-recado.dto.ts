import { PartialType } from '@nestjs/mapped-types';
import { CriarRecadoDto } from './criar-recado.dto';

export class AtualizarRecadoDto extends PartialType(CriarRecadoDto) {}
