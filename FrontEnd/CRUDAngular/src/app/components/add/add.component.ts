import { Component } from '@angular/core';


// Aca importamos el servicio ClientesService. Esto nos permite usar el servicio ClientesService en este componente.
import { ClientesService } from 'src/app/services/clientes.service';
// Aca importamos el modelo Cliente. Esto nos permite usar el modelo Cliente en este componente. El modelo Cliente es el que nos permite definir el tipo de datos que vamos a usar para los clientes.
import { Cliente } from 'src/app/clientes.models';
// Aca importamos el modulo Router. Esto nos permite usar el modulo Router en este componente. El modulo Router es el que nos permite navegar entre las rutas de la aplicacion.
import { Router } from '@angular/router';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent {
  cliente: Cliente = {
    id: 0,
    name: '',
    apellido: '',
    tel: '',
    avatar: ''
  };
  // Aca inyectamos el servicio ClientesService y el modulo Router en el constructor de este componente. Esto nos permite usar el servicio ClientesService y el modulo Router en este componente. El servicio ClientesService es el que nos permite hacer las peticiones HTTP a la API. El modulo Router es el que nos permite navegar entre las rutas de la aplicacion.
  constructor(private clientesService: ClientesService, private router: Router) { }




  // Aca creamos el metodo addCliente(). Este metodo se ejecuta cuando el usuario hace click en el boton "Agregar". Este metodo llama al metodo addCliente() del servicio ClientesService. Este metodo del servicio ClientesService es el que hace la peticion HTTP POST a la API para agregar un cliente. Cuando la peticion HTTP POST a la API para agregar un cliente se completa con exito, este metodo del servicio ClientesService nos redirige a la ruta "/". Esta ruta es la ruta de la lista de clientes.
  addCliente() {

    // Aca eliminamos la propiedad id del objeto cliente. Esto es porque la API no espera que le enviemos el id del cliente cuando hacemos la peticion HTTP POST para agregar un cliente. La API genera el id del cliente cuando se agrega un cliente.
    delete this.cliente.id;

    // Aca vamos hacer la validacion de los campos del formulario. Si el usuario no ingresa un nombre, un apellido o un telefono, entonces mostramos un mensaje de error y no hacemos la peticion HTTP POST a la API para agregar un cliente.
    if (this.cliente.name === '' || this.cliente.apellido === '' || this.cliente.tel === '') {
      alert('Por favor ingrese un nombre, un apellido y un telefono');
      return;
    }

    this.clientesService.addCliente(this.cliente).subscribe({
      next: () => {
        // Aca redirigimos al usuario a la ruta "/". Esta ruta es la ruta de la lista de clientes.
        this.router.navigate(['/']);
      },
      error: err => {
        console.log(err);
      },
      complete: () => {
        alert('Cliente agregado con exito :)');
      }
    });
  }



}
