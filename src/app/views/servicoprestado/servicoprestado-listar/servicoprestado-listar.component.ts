import { ServicoprestadoService } from './../servicoprestado.service';
import { ServicoPrestado } from './../servicoprestado.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servicoprestado-listar',
  templateUrl: './servicoprestado-listar.component.html',
  styleUrls: ['./servicoprestado-listar.component.css']
})
export class ServicoprestadoListarComponent implements OnInit {
  servicoprestado: ServicoPrestado[] = []

  constructor(private service: ServicoprestadoService, private router: Router) { }

  ngOnInit(): void {
    this.listarTodos();
  }

  listarTodos() {
    this.service.listarTodos().subscribe(resposta => {
      this.servicoprestado = resposta;
    })
  }

  navegarParaServicoPrestadoCriar() {
    this.router.navigate(["servico-prestado/criar"])
  }

}
