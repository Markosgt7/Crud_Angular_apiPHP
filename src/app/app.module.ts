import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AgregarEmpleadoComponent } from './componentes/agregar-empleado/agregar-empleado.component';
import { ListarEmpleadoComponent } from './componentes/listar-empleado/listar-empleado.component';
import { EditarEmpleadoComponent } from './componentes/editar-empleado/editar-empleado.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';//modulos que permiten la interación con el formulario 
import { HttpClientModule } from '@angular/common/http';// modulo que permite la peticiones http del sistema


@NgModule({
  declarations: [
    AppComponent,
    AgregarEmpleadoComponent,
    ListarEmpleadoComponent,
    EditarEmpleadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
