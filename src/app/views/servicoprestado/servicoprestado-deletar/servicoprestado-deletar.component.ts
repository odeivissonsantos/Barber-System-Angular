import { ServicoprestadoService } from './../servicoprestado.service';
import { Component, OnInit } from '@angular/core';
import { ServicoPrestado } from '../servicoprestado.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-servicoprestado-deletar',
  templateUrl: './servicoprestado-deletar.component.html',
  styleUrls: ['./servicoprestado-deletar.component.css']
})
export class ServicoprestadoDeletarComponent implements OnInit {
  servicoprestado: ServicoPrestado = {
    descricao: '',
    valor: ''
  }

  constructor(private service: ServicoprestadoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.servicoprestado.id! = this.route.snapshot.paramMap.get('id')!
    this.buscarPorId()
  }

  buscarPorId(): void {
    this.service.buscarPorId(this.servicoprestado.id!).subscribe((resposta) => {
      this.servicoprestado = resposta
    })
  }

  deletar(): void {
    this.service.deletar(this.servicoprestado.id!).subscribe((resposta) => {
      this.router.navigate(['servicos-prestados'])
    })
  }

  voltar(): void {
    this.router.navigate(['servicos-prestados'])
  }

}
