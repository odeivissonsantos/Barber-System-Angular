import { ServicoprestadoService } from './../servicoprestado.service';
import { ServicoPrestado } from './../servicoprestado.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servicoprestado-criar',
  templateUrl: './servicoprestado-criar.component.html',
  styleUrls: ['./servicoprestado-criar.component.css']
})
export class ServicoprestadoCriarComponent implements OnInit {

  servicoprestado: ServicoPrestado = {
    descricao: '',
    valor: ''
  }

  constructor(private service: ServicoprestadoService, private router: Router) { }

  ngOnInit(): void {
  }

  salvar(): void {
    this.service.salvar(this.servicoprestado).subscribe((resposta) => {
      this.router.navigate(['servicos-prestados'])
    })
  }

  voltar(): void {
    this.router.navigate(['servicos-prestados'])
  }

}
