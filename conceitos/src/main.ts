// Arquivo que inicia o projeto por padrão
// Da para modificar o nome ou caminho dele no nest-cli.json
// Exemplo de como ficaria no arquivo nest-cli.json:
// "entryFile": "Principal.ts" <-- Dai o cli do nest iria procurar o arquivo Principal.ts
// para dar inicio ao projeto

// 127.0.0.1:3000
// http://localhost:3000

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
  // função assíncrona para iniciar o app que vai executar uma chamada para o core do nest em busca de criar o appModule
  const app = await NestFactory.create(AppModule); //appModule é o modulo principal do nest, que vai importar todos os outros modulos do projeto
  await app.listen(process.env.PORT ?? 3000); // Escuta na porta 3000
}
bootstrap();
