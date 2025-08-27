import { Module } from '@nestjs/common';
import { ConceitosManualController } from './conceitos-manual.controller';
import { conceitosManualService } from './conceitos-manual.service';

@Module({
  controllers: [ConceitosManualController],
  providers: [conceitosManualService]
})
export class ConceitosManualModule {}
