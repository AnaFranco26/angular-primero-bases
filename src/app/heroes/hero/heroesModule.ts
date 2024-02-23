import { NgModel } from "@angular/forms";
import { HeroComponent } from "./hero.component";
import { NgModule } from "@angular/core";

@NgModule({
  declarations:[
    HeroComponent,
  ],
  exports:[
    HeroComponent
  ]
})
export class heroesModule{}
