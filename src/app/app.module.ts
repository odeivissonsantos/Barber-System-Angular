import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './views/home/home.component';
import { ClienteListarComponent } from './views/cliente/cliente-listar/cliente-listar.component';
import { ClienteCriarComponent } from './views/cliente/cliente-criar/cliente-criar.component';
import { ClienteDeletarComponent } from './views/cliente/cliente-deletar/cliente-deletar.component';
import { ClienteAtualizarComponent } from './views/cliente/cliente-atualizar/cliente-atualizar.component';
import { BarbeiroListarComponent } from './views/barbeiro/barbeiro-listar/barbeiro-listar.component';
import { BarbeiroCriarComponent } from './views/barbeiro/barbeiro-criar/barbeiro-criar.component';
import { BarbeiroDeletarComponent } from './views/barbeiro/barbeiro-deletar/barbeiro-deletar.component';
import { BarbeiroAtualizarComponent } from './views/barbeiro/barbeiro-atualizar/barbeiro-atualizar.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ClienteListarComponent,
    ClienteCriarComponent,
    ClienteDeletarComponent,
    ClienteAtualizarComponent,
    BarbeiroListarComponent,
    BarbeiroCriarComponent,
    BarbeiroDeletarComponent,
    BarbeiroAtualizarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
