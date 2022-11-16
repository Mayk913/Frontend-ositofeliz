import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarClienteComponent } from './components/cliente/actualizar-cliente/actualizar-cliente.component';
import { CrearClienteComponent } from './components/cliente/crear-cliente/crear-cliente.component';
import { MostrarClienteComponent } from './components/cliente/mostrar-cliente/mostrar-cliente.component';
import { MostrarCompraComponent } from './components/comprar/mostrar-compra/mostrar-compra.component';
import { MostrarProductoComponent } from './components/producto/mostrar-producto/mostrar-producto.component';
import { MostrarProveedoresComponent } from './components/proveedores/mostrar-proveedores/mostrar-proveedores.component';


const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/', 
    pathMatch: 'full' 
  },
  {
    path: "clientes",
    component: MostrarClienteComponent
  },
  {
    path: "addclientes",
    component: CrearClienteComponent
  },
  {
    path: "clientes/edit/:id",
    component: ActualizarClienteComponent
  },
  {
    path: "comprar",
    component: MostrarCompraComponent
  },

  {
    path: "productos",
    component: MostrarProductoComponent
  },

  {
    path: "proveedores",
    component: MostrarProveedoresComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
