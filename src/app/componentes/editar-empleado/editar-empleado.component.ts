import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/servicio/crud.service';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.css']
})
export class EditarEmpleadoComponent implements OnInit {
  formularioDeEmpleados: FormGroup;
  elId: any;
  constructor(
    private activeRoute: ActivatedRoute,
    private crudService: CrudService,
    private formulario: FormBuilder,
    private enrutador: Router
  ) {
    this.elId = this.activeRoute.snapshot.params['id'];
    console.log(this.elId);
    this.crudService.ObtenerEmpleado(this.elId).subscribe(
      respuesta => {
        console.log(respuesta);
        this.formularioDeEmpleados.setValue({
          nombre: respuesta[0]['nombre'],
          correo: respuesta[0]['correo'],
        })
      }
    );
    this.formularioDeEmpleados = this.formulario.group(
      {
        nombre: [''],
        correo: [''],
      }
    );
  }
  ngOnInit(): void {
  }
  enviarDatos(): any {
    const datos = this.formularioDeEmpleados.value;
    console.log("datos", datos)
    this.crudService.EditarEmpleado(this.elId,this.formularioDeEmpleados.value).subscribe(()=>{});
    alert('Se ha editado correctamente');
    this.enrutador.navigateByUrl('/listar-empleado')
  }
}
