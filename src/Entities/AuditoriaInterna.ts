import { TributavelInterface } from "./TributavelInterface";

export class AuditoriaInterna{

      private _tributaveis: TributavelInterface[];

      constructor(tributaveis: TributavelInterface[]){
            this._tributaveis = tributaveis;
      }

      public adicionar(tributavel: TributavelInterface){
            this._tributaveis.push(tributavel); 
      }

      public adicionarAll(arrayTributaveis:  TributavelInterface[]){

            arrayTributaveis.forEach((item) => this._tributaveis.push(item))

      }

      public calcularTributos(){

            let soma:number = 0;

            this._tributaveis.forEach((tributavel) => {
                  soma += tributavel.calculoTributos();
            })

            return soma;
      }
}