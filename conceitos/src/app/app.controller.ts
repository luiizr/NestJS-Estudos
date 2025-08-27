import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('inicio')
export class AppController {
  constructor(private readonly appService: AppService) {} // Injeção de dependência

  @Get('ola') // Método da solicitação
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('teste')
  getTeste(): string {
    return 'Testando método http';
  }
}
