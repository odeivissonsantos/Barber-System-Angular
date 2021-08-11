import { ClienteService } from './../cliente.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../cliente.model';

@Component({
  selector: 'app-cliente-deletar',
  templateUrl: './cliente-deletar.component.html',
  styleUrls: ['./cliente-deletar.component.css']
})
export class ClienteDeletarComponent implements OnInit {

cliente: Cliente = {
  id: '',
  dataCadastro: '',
  nome: '',
  cpf: '',
  email: '',
  telefone: ''
}

  constructor(private service: ClienteService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.cliente.id! = this.route.snapshot.paramMap.get('id')!
    this.buscarPorId()
  }

  buscarPorId(): void {
    this.service.buscarPorId(this.cliente.id!).subscribe((resposta) => {
      this.cliente = resposta
    })
  }

  deletar(): void {
    this.service.deletar(this.cliente.id!).subscribe((resposta) => {
      this.router.navigate(['clientes'])
    })
  }

  voltar(): void {
    this.router.navigate(['clientes'])
  }
  
}
