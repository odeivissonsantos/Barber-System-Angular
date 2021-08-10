import { ClienteService } from './../cliente.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente.model';

@Component({
  selector: 'app-cliente-listar',
  templateUrl: './cliente-listar.component.html',
  styleUrls: ['./cliente-listar.component.css']
})
export class ClienteListarComponent implements OnInit {
  clientes: Cliente[] = []

  constructor(private service: ClienteService) { }

  ngOnInit(): void {
    this.listarTodos();
  }
  listarTodos() {
    this.service.listarTodos().subscribe(resposta => {
      this.clientes = resposta;
    })
  }
}
