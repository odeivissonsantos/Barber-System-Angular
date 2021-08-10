import { ClienteService } from './../cliente.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente.model';

@Component({
  selector: 'app-cliente-criar',
  templateUrl: './cliente-criar.component.html',
  styleUrls: ['./cliente-criar.component.css']
})
export class ClienteCriarComponent implements OnInit {
  cliente: Cliente = {
    nome: '',
    cpf: '',
	  email: '',
    telefone: '',
  }

  constructor(private service: ClienteService) { }

  ngOnInit(): void {
  }

  salvar(): void {
    this.service.salvar(this.cliente).subscribe((resposta) => {
      
    })
  }
}
