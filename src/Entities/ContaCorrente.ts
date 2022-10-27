import { Conta } from "./Conta";
import { TributavelInterface } from "./TributavelInterface";

export class ContaCorrente extends Conta implements TributavelInterface{

      constructor(nome:string, saldo:number){
            super(nome,saldo);
      }

      public calculoTributos():number {
            return 0.1 * this.saldo;
      }
}