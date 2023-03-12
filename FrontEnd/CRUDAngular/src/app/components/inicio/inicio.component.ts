import { Component } from '@angular/core';
import { Router } from '@angular/router';

// Aca estamos importando el servicio ClientesService. Esto nos permite usar el servicio ClientesService en este componente. Esto es lo que nos permite hacer las peticiones HTTP a la API REST desde este componente.
import { ClientesService } from '../../services/clientes.service';

import { Cliente } from '../../clientes.models';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  ListarClientes: Cliente[] = [];


  constructor(private clientesService: ClientesService, private router:Router) { }

  // Aca estamos creando un metodo que nos permite obtener todos los clientes de la API REST. Este metodo lo vamos a llamar desde el template de este componente. Este metodo retorna un observable. Un observable es un objeto que nos permite recibir notificaciones cuando se producen cambios en el estado de un objeto. En este caso, cuando se produzca un cambio en el estado de la respuesta de la API REST, el observable nos va a notificar y vamos a poder obtener los datos de la respuesta de la API REST.

  // Sintaxis nueva de los observables.
  listarClientes() {
    this.clientesService.getClientes().subscribe({
      next: res => {
        // manejar los datos recibidos
        // console.log(res);
        this.ListarClientes = <any>res;
      },
      error: err => {
        // manejar el error
        console.log(err);
      },
      complete() {
        // realizar alguna tarea cuando se completa el observable
        console.log("Estamos trayendo los datos de la API REST. CIUUUUUUUUUUUU");
      }
    });
  }


  EliminarCliente(id: any, cliente: any) {
    this.clientesService.deleteCliente(id).subscribe({
      next: res => {
        // manejar los datos recibidos
        console.log(`El cliente ${id} fue eliminado correctamente.`);
        // Aca estamos llamando al metodo listarClientes() para listar los clientes cuando se crea el componente.
        this.listarClientes();
      },
      error: err => {
        console.log(err);
      },
      complete() {
        alert(`El cliente ${cliente.name} ${cliente.apellido} fue eliminado correctamente.`);
      }
    });
  }


  EditarCliente(id: any, cliente: any) {
    // Aca estamos redireccionando a l a ruta /editar/:id. Esto nos permite redireccionar a la ruta /editar/:id cuando se hace click en el boton Editar de un cliente.
    this.router.navigate(['/edit', id]);
  }





  // Sintaxis antigua de los observables.
  // listarClientes() {
  //   this.clientesService.getClientes().subscribe(
  //     res => {
  //       console.log(res);
  //     },
  //     err => console.log(err)
  //   );
  // }

  // Aca estamos llamando al metodo listarClientes() cuando se inicializa el componente. Esto nos permite listar los clientes cuando se carga el componente. Esto es lo que se conoce como ciclo de vida de un componente. Un componente tiene un ciclo de vida que se inicia cuando se crea el componente y termina cuando se destruye el componente. En este caso, el ciclo de vida del componente inicio.component.ts se inicia cuando se crea el componente y termina cuando se destruye el componente. Cuando se crea el componente, se ejecuta el metodo ngOnInit() y cuando se destruye el componente, se ejecuta el metodo ngOnDestroy(). En este caso, estamos llamando al metodo listarClientes() desde el metodo ngOnInit() para listar los clientes cuando se crea el componente. Esto es lo que se conoce como ciclo de vida de un componente.
  ngOnInit(): void {
    // Aca estamos llamando al metodo listarClientes() para listar los clientes cuando se crea el componente.
    this.listarClientes();
  }

}
