import { Router } from '@angular/router';
import { BarbeiroService } from './../barbeiro.service';
import { Component, OnInit } from '@angular/core';
import { Barbeiro } from '../barbeiro.model';

@Component({
  selector: 'app-barbeiro-listar',
  templateUrl: './barbeiro-listar.component.html',
  styleUrls: ['./barbeiro-listar.component.css']
})
export class BarbeiroListarComponent implements OnInit {
  barbeiros : Barbeiro[] = []

  constructor(private service: BarbeiroService, private router: Router) { }

  ngOnInit(): void {
    this.listarTodos();
  }

  listarTodos() {
    this.service.listarTodos().subscribe(resposta => {
      this.barbeiros = resposta;
    })
  }

  navegarParaBarbeiroCriar() {
    this.router.navigate(["barbeiros/criar"])
  }



}
