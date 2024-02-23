import { Component } from '@angular/core';

@Component({
  selector: 'app-heros-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string= "Ana";
  public edad: number= 25;
  public ciudad: string= "Guapota";

get nombreCudad():string{
  return this.ciudad.toUpperCase();
}

  obtenerMetodo(): string{
    return `${this.name} - ${this.edad}`;
}

changeName(): void{
  this.name= "fernanda";
}

changeEdad(): void{
  this.edad= 10;
}

reset():void{
  this.edad=25;
  this.name= 'Ana';
}

}
