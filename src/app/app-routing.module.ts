import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { TableroComponent } from './components/tablero/tablero.component';
import { ConfiguracionComponent } from './components/configuracion/configuracion.component';
import { EditarClienteComponent } from './components/editar-cliente/editar-cliente.component';
import { NoEncontradoComponent } from './components/no-encontrado/no-encontrado.component';

const routes: Routes = [
  { path: '', component: TableroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registrarse', component: LoginComponent },
  { path: 'configuracion', component: ConfiguracionComponent },
  { path: 'cliente/editar/:id', component: EditarClienteComponent },
  { path: '**', component: NoEncontradoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
