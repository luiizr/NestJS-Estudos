import { Injectable } from '@nestjs/common';

const name = 'Luiz';

@Injectable()
export class AppService {
  getHello(): string {
    return '<h1>Olá mundo, estou testando um método get!</h1><br><button>POST</button><br>';
    name;
  }

  postHello(nome: string): string {
    nome = nome
    return `Seu nome é f{nome}`;
  }
}
