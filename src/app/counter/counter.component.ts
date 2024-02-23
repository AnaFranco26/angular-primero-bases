import { Component } from "@angular/core";

@Component({
  selector: 'counter-app',
  templateUrl: './counter.component.html'
})
export class CounterComponent{
  title = 'bases';
  public contador:number=10;

  incrementarValor():void{
    this.contador +=1;
  }

reset(numero:number):void{
  this.contador= numero;
}
  restatValor(numero: number):void{
    this.contador =this.contador-numero;

  }

}
