import { BarbeiroAtualizarComponent } from './views/barbeiro/barbeiro-atualizar/barbeiro-atualizar.component';
import { BarbeiroDeletarComponent } from './views/barbeiro/barbeiro-deletar/barbeiro-deletar.component';
import { BarbeiroCriarComponent } from './views/barbeiro/barbeiro-criar/barbeiro-criar.component';
import { BarbeiroListarComponent } from './views/barbeiro/barbeiro-listar/barbeiro-listar.component';
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
  },
  {
    path: 'barbeiros',
    component: BarbeiroListarComponent
  },
  {
    path: 'barbeiros/criar',
    component: BarbeiroCriarComponent
  },
  {
    path: 'barbeiros/deletar/:id',
    component: BarbeiroDeletarComponent
  },
  {
    path: 'barbeiros/atualizar/:id',
    component: BarbeiroAtualizarComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
