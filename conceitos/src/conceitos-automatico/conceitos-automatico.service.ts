import { Injectable } from '@nestjs/common';

@Injectable()
export class ConceitosAutomaticoService {

    testAutomatico(): string {
        return 'Conceitos-automatico funcionando!'
    }
}
