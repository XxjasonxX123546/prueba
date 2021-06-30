import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Welcome, Datum } from '../interfaces/gift.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GiftsService {

  private apikey: string ='YhoyWFpB2w9fZcRJyhEi231kgAvR0Oyt';
  private _historial:string[]=[];
  private servicioUrl: string='http://api.giphy.com/v1/gifs'
  //cambiar any por su verdadero tipo
  public resultados:Datum[]=[];
  get historial(){
    this._historial = this._historial.slice(0,10);
    return [...this._historial];
  }
  constructor(private http: HttpClient){
    this._historial=JSON.parse(localStorage.getItem('historial')!)|| [];
    this.resultados=JSON.parse(localStorage.getItem('resultados')!)||[];
    /*if(localStorage.getItem('historial')){
      this._historial=JSON.parse(localStorage.getItem('historial')!);
    };*/
  }
  buscarGifs(query:string){
    query=query.toUpperCase();
    if(!this._historial.includes(query)){
      this._historial.unshift(query); 
      this._historial = this._historial.slice(0,10);
      localStorage.setItem('historial',JSON.stringify(this._historial));
    }

    const params =new HttpParams()
      .set('api_key',this.apikey)
      .set('limit','5')
      .set('q',query)

    console.log(params.toString());

    this.http.get<Welcome>(`${this.servicioUrl}/search`,{params})
      .subscribe((resp)=>{
        console.log(resp.data);
        this.resultados=resp.data;
        localStorage.setItem('resultados',JSON.stringify(this.resultados));
      })
    


  }
}
