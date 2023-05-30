import { Component, OnInit } from '@angular/core';
import { ApiAndCalistoService } from 'src/app/service/api/api-and-calisto.service';

@Component({
  selector: 'app-dashboard-pedidos',
  templateUrl: './dashboard-pedidos.component.html',
  styleUrls: ['./dashboard-pedidos.component.css']
})
export class DashboardPedidosComponent implements OnInit{


  pedidos:any=[];
  
  constructor(private apiAnanda:ApiAndCalistoService){}
  
  ngOnInit(): void {
    this.apiAnanda.listarPedidos().subscribe(
      (data)=>{
        console.log(data);
        this.pedidos = data;
      }
    );
  }

}
