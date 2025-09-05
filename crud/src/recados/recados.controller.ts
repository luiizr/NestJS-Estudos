import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { RecadosService } from './recados.service';
import { AtualizarRecadoDto } from './dto/atualizar-recado.dto';
import { CriarRecadoDto } from './dto/criar-recado.dto';

@Controller('recados')
export class RecadosController {
  constructor(private readonly recadosService: RecadosService) {}

  // Essa rota retorna todos os recados
  @Get()
  buscarTodosRecados() {
    return this.recadosService.buscarTodosRecados();
  }

  // Essa rota retorna apenas um recado
  @Get(':id')
  buscarRecado(@Param('id') id: number) {
    return this.recadosService.buscarRecado(id);
  }

  @Post()
  criarRecado(@Body() body: CriarRecadoDto) {
    return this.recadosService.criarRecado(body);
  }

  // PATCH e PUT
  // PATH modifica as chaves isoladamente daquele json
  // PUT modifica o objeto json inteiro
  @Patch(':id')
  atualizarRecado(@Param('id') id: number, @Body() body: AtualizarRecadoDto) {
    return this.recadosService.atualizarRecado(id, body);
  }

  @Delete(':id')
  removerRecado(@Param('id') id: number) {
    return this.recadosService.removerRecado(id);
  }
}
