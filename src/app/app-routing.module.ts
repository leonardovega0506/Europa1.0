import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardGeneralComponent } from './views/dashboard-general/dashboard-general.component';
import { DashboardPedidosComponent } from './views/completos/dashboard-pedidos/dashboard-pedidos.component';
import { ListaPaqueteEstafetaComponent } from './views/estafeta/lista-paquete-estafeta/lista-paquete-estafeta.component';

const routes: Routes = [
  {path:'',component:DashboardGeneralComponent,children:[
    {path:'pedidos',component:DashboardPedidosComponent},
    {path:'estafeta',component:ListaPaqueteEstafetaComponent}
  ]}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
