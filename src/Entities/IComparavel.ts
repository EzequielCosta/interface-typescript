import { IFiguraGeometrica } from "./FiguraGeometrica";

export interface IComparavel{
      comparar(figuraGeometrica: IFiguraGeometrica): number;      
}

