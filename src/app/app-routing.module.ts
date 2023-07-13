import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//importación de componentes
import { AgregarEmpleadoComponent } from './componentes/agregar-empleado/agregar-empleado.component';
import { ListarEmpleadoComponent } from './componentes/listar-empleado/listar-empleado.component';
import { EditarEmpleadoComponent } from './componentes/editar-empleado/editar-empleado.component';

const routes: Routes = [
  //ruta por default cuando se inicia en el sistema
  { path: '', pathMatch: 'full', redirectTo: 'agregar-empleado' },
  //creaciopn de rutas para acceder a los componentes
  { path: "agregar-empleado", component: AgregarEmpleadoComponent },
  { path: "listar-empleado", component: ListarEmpleadoComponent },
  { path: "editar-empleado/:id", component: EditarEmpleadoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
