import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Barbeiro } from '../barbeiro.model';
import { BarbeiroService } from '../barbeiro.service';

@Component({
  selector: 'app-barbeiro-criar',
  templateUrl: './barbeiro-criar.component.html',
  styleUrls: ['./barbeiro-criar.component.css']
})
export class BarbeiroCriarComponent implements OnInit {

  barbeiro: Barbeiro = {
    nome: '',
    cpf: '',
	  email: '',
    telefone: '',
  }

  constructor(private service: BarbeiroService, private router: Router) { }

  ngOnInit(): void {
  }

  salvar(): void {
    this.service.salvar(this.barbeiro).subscribe((resposta) => {
      this.router.navigate(['barbeiros'])
    })
  }

  voltar(): void {
    this.router.navigate(['barbeiros'])
  }


}
