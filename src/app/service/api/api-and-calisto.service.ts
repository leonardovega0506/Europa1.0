import { Injectable } from '@angular/core';
import baseUrl from '../utils/helper';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiAndCalistoService {
  baseAnd:string =`${baseUrl}`;
  constructor(private http:HttpClient) { }


  /* **Pedidos** */
  public listarPedidos(){
    return this.http.get(this.baseAnd);
  }

  /* **Estafeta** */
  //
}
