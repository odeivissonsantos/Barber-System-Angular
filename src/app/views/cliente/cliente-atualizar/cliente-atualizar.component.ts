import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { ClienteService } from './../cliente.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente.model';

@Component({
  selector: 'app-cliente-atualizar',
  templateUrl: './cliente-atualizar.component.html',
  styleUrls: ['./cliente-atualizar.component.css']
})
export class ClienteAtualizarComponent implements OnInit {

  cliente: Cliente = {
    id: '',
    dataCadastro: '',
    nome: '',
    cpf: '',
    email: '',
    telefone: ''
  }

  constructor(private service: ClienteService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.cliente.id = this.route.snapshot.paramMap.get('id')!
    this.buscarPorId()
  }

  atualizar(): void {
    this.service.atualizar(this.cliente).subscribe((resposta) => {
      this.router.navigate(['clientes'])
    })
  }

  buscarPorId(): void {
    this.service.buscarPorId(this.cliente.id!).subscribe((resposta) => {
      this.cliente = resposta
    })
  }

  voltar(): void {
    this.router.navigate(['clientes'])
  }
}
