// Aca se definen las rutas de la aplicacion y se importan en el app.module.ts para que se puedan usar en toda la aplicacion
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';

const routes: Routes = [
  //* Aqui se definen las rutas de la aplicacion
  // Aca signamos la ruta por defecto de la aplicacion y la redireccionamos a la ruta /inicio que es la ruta de la pagina principal
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },

  //* Aqui definimos los componentes que se van a mostrar en cada ruta de la aplicacion
  // Aca definimos la ruta /inicio y le asignamos el componente InicioComponent que es el componente que se va a mostrar en esa ruta (pagina) de la aplicacion
  { path: 'inicio', component: InicioComponent },
  { path: 'add', component: AddComponent },
  { path: 'edit/:id', component: EditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
