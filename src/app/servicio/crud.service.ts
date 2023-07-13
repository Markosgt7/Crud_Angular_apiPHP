/* en este archivo se interactua con la base de datos del sistema y la API */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';//para comunicarse con la API
import { Observable } from 'rxjs';// este es el que maneja la interacción del sitio
import { Empleado } from './Empleado';//modelo con la estructura de datos a enviar

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  API: string = 'http://localhost/angular/crudMarkos/backend/';
  constructor(private clienteHttp: HttpClient) { }

  AgregarEmpleado(datosEmpleado: Empleado): Observable<any> {
    return this.clienteHttp.post(this.API + "?insertar=1", datosEmpleado);
  }

  ObtenerEmpleados() {
    return this.clienteHttp.get(this.API);
  }

  BorrarEmpleado(id: any): Observable<any> {
    return this.clienteHttp.get(this.API + "?borrar=" + id);
  }
  ObtenerEmpleado(id: any): Observable<any> {
    return this.clienteHttp.get(this.API + "?consultar=" + id);
  }
  EditarEmpleado(id: any, datosEmpleado:any):Observable<any>{
    return this.clienteHttp.post(this.API+"?actualizar="+id,datosEmpleado);
  }

}
