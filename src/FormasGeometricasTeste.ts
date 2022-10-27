import { Quadrado } from "./Entities/Quadrado";
import { Triangulo } from "./Entities/Triangulo";

export class FormasGeometricasTeste{

      main(){

            const triangulo1 = new Triangulo(4,5,7, 8, 5);
            const triangulo2 = new Triangulo(6,10,4, 4, 4);
            const triangulo3 = new Triangulo(8,10,7, 12, 7);
            const quadrado1 = new Quadrado(4);
            const quadrado2 = new Quadrado(6);
            const quadrado3 = new Quadrado(3);

            console.log(`A área do quadrado1 é ${quadrado1.calcularArea()}`);
            console.log(`A perímetro do triangulo1 é ${triangulo1.calcularPerimetro()}`);

            console.log(`A área do quadrado2 é maior que a do triangulo3 é ?  ${quadrado2.comparar(triangulo3)}`);
            console.log(`A área do quadrado3 é maior que a do triangulo2 é ?  ${quadrado3.comparar(triangulo2)}`);
            console.log(`A área do quadrado3 é maior que a do quadrado1 é ?  ${quadrado3.comparar(quadrado1)}`);

            console.log("Legenda: (-1 -> Não, 0 -> É Igual, 1 -> Sim)")
            
      }
}