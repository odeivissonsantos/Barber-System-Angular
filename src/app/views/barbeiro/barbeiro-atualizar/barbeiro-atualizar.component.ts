import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Barbeiro } from '../barbeiro.model';
import { BarbeiroService } from '../barbeiro.service';

@Component({
  selector: 'app-barbeiro-atualizar',
  templateUrl: './barbeiro-atualizar.component.html',
  styleUrls: ['./barbeiro-atualizar.component.css']
})
export class BarbeiroAtualizarComponent implements OnInit {

  barbeiro: Barbeiro = {
    id: '',
    dataCadastro: '',
    nome: '',
    cpf: '',
    email: '',
    telefone: ''
  }

  constructor(private service: BarbeiroService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.barbeiro.id = this.route.snapshot.paramMap.get('id')!
    this.buscarPorId()
  }

  atualizar(): void {
    this.service.atualizar(this.barbeiro).subscribe((resposta) => {
      this.router.navigate(['barbeiros'])
    })
  }

  buscarPorId(): void {
    this.service.buscarPorId(this.barbeiro.id!).subscribe((resposta) => {
      this.barbeiro = resposta
    })
  }

  voltar(): void {
    this.router.navigate(['barbeiros'])
  }

}
