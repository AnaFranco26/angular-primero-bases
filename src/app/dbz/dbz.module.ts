import { NgModule } from '@angular/core';
import { PageComponent } from './pages/main-page.component';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './components/lista/lista.component';
import { CharacterComponent } from './components/character/character.component';
import { PruebaComponent } from './components/prueba/prueba.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PageComponent,
    ListaComponent,
    CharacterComponent,
    PruebaComponent
  ],
  exports:[
    PageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
