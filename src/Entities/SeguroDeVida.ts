import { TributavelInterface } from "./TributavelInterface";

export class SeguroDeVida implements TributavelInterface{

      calculoTributos(): number {
            return 50.0;
      }
}