import { Injectable } from '@angular/core';
import { Character } from '../interfaces/Character.intercace';
import { v4 as uuid } from 'uuid'

console.log('...' + uuid())

@Injectable({
  providedIn: 'root'
})

export class DbzService {
[x: string]: any;

  public characters: Character[] = [{
    id: uuid(),
    name: 'Prueba',
    power: 1000
  },
  {
    id: uuid(),
    name: 'Prueba Ana',
    power: 10000
  },
  {
    id: uuid(),
    name: 'heroe 1',
    power: 1000
  },
  {
    id: uuid(),
    name: 'heroe Ana',
    power: 10000
  }];

  onNewEmiter(caracter: Character): void {
    console.log(caracter)
    const newCaracter: Character={  ...caracter}
    this.characters.push(newCaracter);
  }
  /*onDeleteId(index: number): void {
    console.log(index)
    this.characters.splice(index, 1)

  }*/

  onDeletebyId(id: string) {

    this.characters= this.characters.filter( caracter => caracter.id !== id);

  }

}
