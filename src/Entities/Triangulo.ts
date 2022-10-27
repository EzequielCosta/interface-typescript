import { IFiguraGeometrica } from "./FiguraGeometrica";
import { IComparavel } from "./IComparavel";

export class Triangulo implements IFiguraGeometrica, IComparavel{

      private _lado1:number;
      private _lado2:number;
      private _lado3:number;
      private _altura: number;
      private _base:number;

      constructor(lado1:number, lado2:number, lado3:number, altura:number, base:number){
            this._lado1 = lado1;
            this._lado2 = lado2;
            this._lado3 = lado3;
            this._altura = altura;
            this._base = base;
      }

      public calcularArea(): number{
            return (this._base * this._altura) / 2;
      };

      public calcularPerimetro() : number{
            return this._lado1 + this._lado2 + this._lado3;
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