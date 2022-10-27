import { IFiguraGeometrica } from "./FiguraGeometrica";
import { IComparavel } from "./IComparavel";

export class Quadrado implements IFiguraGeometrica, IComparavel{

      private _lado:number;

      constructor(lado:number){
            this._lado = lado;
      }

      public calcularArea(): number{
            return this._lado * this._lado;
      };

      public calcularPerimetro() : number{
            return this._lado * 4;
      };

      public comparar(figuraGeometrica: IFiguraGeometrica): number {

            if (this.calcularArea() < figuraGeometrica.calcularArea()){
                  return -1;
            }

            if (this.calcularArea() > figuraGeometrica.calcularArea()){
                  return 1;
            }

            return 0;
      }

      
}