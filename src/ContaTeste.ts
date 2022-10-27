import { AuditoriaInterna } from "./Entities/AuditoriaInterna";
import { ContaCorrente } from "./Entities/ContaCorrente";
import { SeguroDeVida } from "./Entities/SeguroDeVida";
import { TributavelInterface } from "./Entities/TributavelInterface";

export class ContaTeste{
      
      main(){
            const contaCorrente1 = new ContaCorrente('Ezequiel', 2000);
            const contaCorrente2 = new ContaCorrente('Paulo', 8000);
            const contaCorrente3 = new ContaCorrente('Isaque', 16000);
            const contaCorrente4 = new ContaCorrente('Danilo', 9000);

            const seguroDeVida1 = new SeguroDeVida();
            const seguroDeVida2 = new SeguroDeVida();
            const seguroDeVida3 = new SeguroDeVida();

            const tributaveis: TributavelInterface[] = []; 

            const auditoria = new AuditoriaInterna(tributaveis);

            auditoria.adicionarAll([
                  contaCorrente1,
                  contaCorrente2,
                  contaCorrente3,
                  contaCorrente4,
                  seguroDeVida1,
                  seguroDeVida2,
                  seguroDeVida3
            ]);

            console.log(`A soma de todos os tributos é: ${auditoria.calcularTributos()}`)


      }
}