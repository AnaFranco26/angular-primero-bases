import { Character } from './../interfaces/Character.intercace';


import { Component, OnInit } from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-page',
  templateUrl: './page.component.html'
})

export class PageComponent  {

constructor( private dbzService: DbzService){}

get carters(): Character[]{
  return [...this.dbzService.characters]
}

ondeleteCharacter( id: string):void{
this.dbzService.onDeletebyId(id)
}

ondCharacter( carac: Character):void{
  this.dbzService.onNewEmiter(carac)
  }

}
