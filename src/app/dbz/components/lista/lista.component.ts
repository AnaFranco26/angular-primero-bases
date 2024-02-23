import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from '../../interfaces/Character.intercace';

import { v4 as uuid } from 'uuid'

@Component({
  selector: 'app-dbz-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']

})
export class ListaComponent {


  @Input()
  public listcharacters: Character[] = [{
    id: uuid(),
    name: 'heroe 1',
    power: 1000
  }];

@Output()
onborrarId:EventEmitter<string> = new EventEmitter();
carater: any;


  borrarId(id?:string): void{
    console.log(".."+id);
    if(!id) return;
    this.onborrarId.emit(id);
   }


}


