import { ServicoprestadoService } from './../servicoprestado.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicoPrestado } from '../servicoprestado.model';


@Component({
  selector: 'app-servicoprestado-atualizar',
  templateUrl: './servicoprestado-atualizar.component.html',
  styleUrls: ['./servicoprestado-atualizar.component.css']
})
export class ServicoprestadoAtualizarComponent implements OnInit {

  servicoprestado: ServicoPrestado = {
    descricao: '',
    valor: ''
  }

  constructor(private service: ServicoprestadoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.servicoprestado.id = this.route.snapshot.paramMap.get('id')!
    this.buscarPorId()
  }

  atualizar(): void {
    this.service.atualizar(this.servicoprestado).subscribe((resposta) => {
      this.router.navigate(['servicos-prestados'])
    })
  }

  buscarPorId(): void {
    this.service.buscarPorId(this.servicoprestado.id!).subscribe((resposta) => {
      this.servicoprestado = resposta
    })
  }

  voltar(): void {
    this.router.navigate(['servicos-prestados'])
  }

}
