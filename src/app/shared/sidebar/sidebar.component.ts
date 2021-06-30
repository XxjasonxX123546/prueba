import { Component} from '@angular/core';
import { GiftsService } from 'src/app/gifts/services/gifts.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  constructor(private giftService:GiftsService){}
  get historiales(){
    return this.giftService.historial
  }
  buscar(termino:string){
    console.log(termino);
    this.giftService.buscarGifs(termino);

  }
}
