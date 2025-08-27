import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConceitosAutomaticoModule } from 'src/conceitos-automatico/conceitos-automatico.module';
import { ConceitosManualModule } from 'src/conceitos-manual/conceitos-manual.module';

@Module({
  imports: [ConceitosAutomaticoModule, ConceitosManualModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
