import { Character } from './../../interfaces/Character.intercace';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { v4 as uuid } from 'uuid'

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent  {
@Output()
onNewEmiter:EventEmitter<Character> = new EventEmitter();

 public character:Character ={
  id: uuid(),
  name:"",
  power:0
 }

 emitCaracter():void{
  console.log(this.character);
  if(this.character.name.length===0)return
  this.onNewEmiter.emit(this.character);
  this.character= {id: uuid(),name:'', power:0}
 }

}
