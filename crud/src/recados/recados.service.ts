import { Injectable, NotFoundException } from '@nestjs/common';
import { Recado } from './entities/recado.entity';
import { CriarRecadoDto } from './dto/criar-recado.dto';
import { AtualizarRecadoDto } from './dto/atualizar-recado.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RecadosService {
  constructor(
    @InjectRepository(Recado)
    private readonly recadoBD: Repository<Recado>,
  ) {}

  private lastId = 1;

  private recados: Recado[] = [
    {
      id: 1,
      texto: 'Recado teste',
      de: 'João',
      para: 'Maria',
      lido: false,
      data: new Date(),
    },
  ];

  async buscarTodosRecados() {
    const recados = await this.recadoBD.find();
    return recados;
  }

  async buscarRecado(id: number) {
    const recados = await this.recadoBD.find({
      where: {
        id: id,
      },
    });
    return recados;
  }

  async criarRecado(body: CriarRecadoDto) {
    const recado = this.recadoBD.create(body); //sem uso de await pois não está buscando nada, apenas adicionando no banco de dados
    // console.info('Criando Recado:', recado);
    return this.recadoBD.save(recado);
  }

  async atualizarRecado(id: number, body: AtualizarRecadoDto) {
    // const recadoId = await this.recadoBD.findOneBy({
    //   id,
    // });
    // const recado = await this.recadoBD.merge(recadoId, body);
    const partialRecado = {
      // lido: body.lido,
      texto: body.texto,
    };

    const recado = await this.recadoBD.preload({
      id,
      ...partialRecado,
    });

    if (!recado) {
      throw new NotFoundException(`Recado com ID ${id} não encontrado`);
    }

    return this.recadoBD.save(recado);
  }

  async removerRecado(id: number) {
    const recado = await this.recadoBD.findOneBy({
      id,
    });

    if (!recado) {
      throw new NotFoundException(`Recado com ID ${id} não encontrado`);
    }

    return this.recadoBD.remove(recado);
  }
}
