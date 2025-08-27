import { Controller, Get } from '@nestjs/common';
import { conceitosManualService } from "./conceitos-manual.service"

@Controller('conceitos-manual')
export class ConceitosManualController {
  constructor( private readonly conceitosService: conceitosManualService ) {}

  @Get()
  home(): string {
    return this.conceitosService.solucionaHome();
  }
}
