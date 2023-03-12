import { Component } from '@angular/core';

import { ClientesService } from 'src/app/services/clientes.service';
import { Cliente } from 'src/app/clientes.models';
import { Router } from '@angular/router';

// Aca importamos el modulo ActivatedRoute. Esto nos permite usar el modulo ActivatedRoute en este componente. El modulo ActivatedRoute es el que nos permite obtener los parametros de la ruta actual. En este caso, el modulo ActivatedRoute es el que nos permite obtener el id del cliente que queremos editar.
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  constructor(
    private clienteService: ClientesService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) { }

  cliente: Cliente = {
    id: 0,
    name: '',
    apellido: '',
    tel: '',
    avatar: ''
  }

  ngOnInit(): void {
    // Aca obtenemos el id del cliente que queremos editar. El id del cliente que queremos editar lo obtenemos de los parametros de la ruta actual. El id del cliente que queremos editar lo obtenemos del parametro "id" de la ruta actual. El parametro "id" de la ruta actual lo obtenemos con el metodo snapshot.paramMap.get('id') del modulo ActivatedRoute.
    const id = this.activeRoute.snapshot.paramMap.get('id');
    console.log(`El id del cliente que queremos editar es: ${id}`);	// Aca imprimimos el id del cliente que queremos editar en la consola del navegador.



    // aca hacemos una validacion para ver si el id del cliente que queremos editar es valido. Si el id del cliente que queremos editar es valido, entonces obtenemos el cliente que queremos editar y lo guardamos en la variable cliente. Si el id del cliente que queremos editar no es valido, entonces no hacemos nada.
    if(id) {
      this.clienteService.getCliente(id).subscribe({
        next: (cliente: any) => {
          this.cliente = cliente[0];
          console.log(this.cliente);
        },
        error: (err) => {
          console.log(err);
        }
      })
    }
  }




  updateCliente() {
    this.clienteService.updateCliente(this.cliente.id, this.cliente,).subscribe({
      next: (cliente: any) => {
        console.log(cliente);
        this.router.navigate(['/inicio']);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        alert(`El cliente${this.cliente.name} ${this.cliente.apellido}fue actualizado con exito!`);
      }
    });
  }


}
