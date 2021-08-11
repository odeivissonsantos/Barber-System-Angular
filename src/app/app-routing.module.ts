import { ClienteDeletarComponent } from './views/cliente/cliente-deletar/cliente-deletar.component';
import { ClienteCriarComponent } from './views/cliente/cliente-criar/cliente-criar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClienteListarComponent } from './views/cliente/cliente-listar/cliente-listar.component';
import { HomeComponent } from 'src/app/views/home/home.component'
import { ClienteAtualizarComponent } from './views/cliente/cliente-atualizar/cliente-atualizar.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'clientes',
    component: ClienteListarComponent
  },
  {
    path: 'clientes/criar',
    component: ClienteCriarComponent
  },
  {
    path: 'clientes/deletar/:id',
    component: ClienteDeletarComponent
  },
  {
    path: 'clientes/atualizar/:id',
    component: ClienteAtualizarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
