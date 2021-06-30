import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifstPageComponent } from './gifst-page/gifst-page.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadoComponent } from './resultado/resultado.component';



@NgModule({
  declarations: [
    GifstPageComponent,
    BusquedaComponent,
    ResultadoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GifstPageComponent
  ]
})
export class GiftsModule { }
