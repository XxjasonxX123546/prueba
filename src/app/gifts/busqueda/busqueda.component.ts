import { Component, ElementRef, ViewChild } from '@angular/core';
import { GiftsService } from '../services/gifts.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent {

  @ViewChild('txtEscritura') txtEscritura!:ElementRef<HTMLInputElement>;
  constructor(private giftService: GiftsService){};
  buscar(){ 
    const valor=this.txtEscritura.nativeElement.value;
    if (valor.trim().length ===0){
      return
    };
    this.giftService.buscarGifs(valor);
    this.txtEscritura.nativeElement.value='';
  }
}
