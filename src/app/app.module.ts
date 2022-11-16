import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { ContentComponent } from './components/layout/content/content.component';
import { FooterComponent } from './components/layout/footer/footer.component';

import {MenubarModule} from 'primeng/menubar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MostrarClienteComponent } from './components/cliente/mostrar-cliente/mostrar-cliente.component';
import { CrearClienteComponent } from './components/cliente/crear-cliente/crear-cliente.component';
import { ActualizarClienteComponent } from './components/cliente/actualizar-cliente/actualizar-cliente.component';
import { MostrarProductoComponent } from './components/producto/mostrar-producto/mostrar-producto.component';
import { CrearProductoComponent } from './components/producto/crear-producto/crear-producto.component';
import { ActualizarProductoComponent } from './components/producto/actualizar-producto/actualizar-producto.component';
import { EliminarProductoComponent } from './components/producto/eliminar-producto/eliminar-producto.component';
import { MostrarCompraComponent } from './components/comprar/mostrar-compra/mostrar-compra.component';
import { CrearCompraComponent } from './components/comprar/crear-compra/crear-compra.component';
import { ActualizarCompraComponent } from './components/comprar/actualizar-compra/actualizar-compra.component';
import { EliminarCompraComponent } from './components/comprar/eliminar-compra/eliminar-compra.component';
import { MostrarDistribuirComponent } from './components/distribuir/mostrar-distribuir/mostrar-distribuir.component';
import { CrearDistribuirComponent } from './components/distribuir/crear-distribuir/crear-distribuir.component';
import { ActualizarDistribuirComponent } from './components/distribuir/actualizar-distribuir/actualizar-distribuir.component';
import { EliminarDistribuirComponent } from './components/distribuir/eliminar-distribuir/eliminar-distribuir.component';
import { MostrarProveedoresComponent } from './components/proveedores/mostrar-proveedores/mostrar-proveedores.component';
import { CrearProveedoresComponent } from './components/proveedores/crear-proveedores/crear-proveedores.component';
import { ActualizarProveedoresComponent } from './components/proveedores/actualizar-proveedores/actualizar-proveedores.component';
import { EliminarProveedoresComponent } from './components/proveedores/eliminar-proveedores/eliminar-proveedores.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    MostrarClienteComponent,
    CrearClienteComponent,
    ActualizarClienteComponent,
    MostrarProductoComponent,
    CrearProductoComponent,
    ActualizarProductoComponent,
    EliminarProductoComponent,
    MostrarCompraComponent,
    CrearCompraComponent,
    ActualizarCompraComponent,
    EliminarCompraComponent,
    MostrarDistribuirComponent,
    CrearDistribuirComponent,
    ActualizarDistribuirComponent,
    EliminarDistribuirComponent,
    MostrarProveedoresComponent,
    CrearProveedoresComponent,
    ActualizarProveedoresComponent,
    EliminarProveedoresComponent,

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MenubarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
