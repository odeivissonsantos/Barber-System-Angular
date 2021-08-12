import { Barbeiro } from './../barbeiro.model';
import { Component, OnInit } from '@angular/core';
import { BarbeiroService } from '../barbeiro.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-barbeiro-deletar',
  templateUrl: './barbeiro-deletar.component.html',
  styleUrls: ['./barbeiro-deletar.component.css']
})
export class BarbeiroDeletarComponent implements OnInit {

  barbeiro: Barbeiro = {
    id: '',
    dataCadastro: '',
    nome: '',
    cpf: '',
    email: '',
    telefone: ''
  }

  constructor(private service: BarbeiroService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.barbeiro.id! = this.route.snapshot.paramMap.get('id')!
    this.buscarPorId()
  }

  buscarPorId(): void {
    this.service.buscarPorId(this.barbeiro.id!).subscribe((resposta) => {
      this.barbeiro = resposta
    })
  }

  deletar(): void {
    this.service.deletar(this.barbeiro.id!).subscribe((resposta) => {
      this.router.navigate(['barbeiros'])
    })
  }

  voltar(): void {
    this.router.navigate(['barbeiros'])
  }

}
