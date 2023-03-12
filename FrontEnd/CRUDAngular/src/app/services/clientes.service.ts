// Los servicios son los que nos ayudan a conectar la aplicacion con el backend, es decir, los servicios son los que nos permiten hacer las peticiones HTTP a la API REST que creamos con NodeJS y Express o una API de un tercero.
import { Injectable } from '@angular/core';

// HttpClient es un servicio que nos permite hacer peticiones HTTP a una API REST desde Angular.
import { HttpClient } from '@angular/common/http';

import { Cliente } from '../clientes.models';


@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  // Aca estamos definiendo la URL de la API REST que vamos a consumir.
  url = 'http://localhost:4000/api/clientes';

  constructor(private http: HttpClient) { }


  // Aca estamos creando un metodo que nos permite obtener todos los clientes de la API REST. Este metodo lo vamos a llamar desde el componente inicio.component.ts. Este metodo retorna un observable. Un observable es un objeto que nos permite recibir notificaciones cuando se producen cambios en el estado de un objeto. En este caso, cuando se produzca un cambio en el estado de la respuesta de la API REST, el observable nos va a notificar y vamos a poder obtener los datos de la respuesta de la API REST.
  getClientes() {
    return this.http.get(this.url); // Aca estamos concatenando la URL de la API REST con el metodo get() del servicio HttpClient. Esto nos permite obtener todos los clientes de la API REST. Por ejemplo, si la URL de la API REST es http://localhost:4000/api/clientes, entonces la URL que vamos a concatenar con el metodo get() del servicio HttpClient es http://localhost:4000/api/clientes/get.
  }

  getCliente(id: string) {
    return this.http.get(`${this.url}/${id}`); // Aca estamos concatenando la URL de la API REST con el id del cliente que queremos obtener. Esto nos permite obtener un cliente en particular de la API REST. Por ejemplo, si la URL de la API REST es http://localhost:4000/api/clientes y el id del cliente que queremos obtener es 1, entonces la URL que vamos a concatenar con el id del cliente es http://localhost:4000/api/clientes/1.
  }

  addCliente(cliente: Cliente) {
    return this.http.post(this.url, cliente); // Aca estamos concatenando la URL de la API REST con el objeto cliente que queremos agregar. Esto nos permite agregar un cliente a la API REST. Por ejemplo, si la URL de la API REST es         http://localhost:4000/api/clientes y el objeto cliente que queremos agregar es {nombre: "Juan", apellido: "Perez", empresa: "Google", email: "
  }

  updateCliente(id: any, cliente: Cliente) {
    return this.http.put(`${this.url}/${id}`, cliente); // Aca estamos concatenando la URL de la API REST con el id del cliente que queremos actualizar y con el objeto cliente que queremos actualizar. Esto nos permite actualizar un cliente en particular de la API REST. Por ejemplo, si la URL de la API REST es      http://localhost:4000/api/clientes y el id del cliente que queremos actualizar es 1 y el objeto cliente que queremos actualizar es {nombre: "Juan", apellido: "Perez", empresa: "Google", email: "
  }

  deleteCliente(id: string) {
    return this.http.delete(`${this.url}/${id}`); // Aca estamos concatenando la URL de la API REST con el id del cliente que queremos eliminar. Esto nos permite eliminar un cliente en particular de la API REST. Por ejemplo, si la URL de la API REST es http://localhost:4000/api/clientes y el id del cliente que queremos eliminar es 1, entonces la URL que vamos a concatenar con el id del cliente es http://localhost:4000/api/clientes/1.
  }
}

