import { Component } from '@angular/core';

@Component({
  selector: 'app-heros-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroeName: string[] = ['Spiderman', 'iroman', 'hulk', 'thor'];
  public heroeDelete?:string;

  deleteHero():void{
    this.heroeDelete= this.heroeName.pop();

  }

  postHero():void{
    this.heroeName.push('Ana');
  }

}
