export class Conta{
      
      constructor(private _nome:string, private _saldo:number){}

      get nome(){
            return this.nome;
      }

      set nome(value:string){
            this.nome = value;
      }

      get saldo(){
            return this._saldo;
      }

      set saldo(value:number){
            this.saldo = value;
      }


}