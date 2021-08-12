import { Barbeiro } from './barbeiro.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BarbeiroService {
  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient) { }

  listarTodos():Observable<Barbeiro[]> {
    const url = `${this.baseUrl}/api/barbeiros`
    return this.http.get<Barbeiro[]>(url)
  }

  buscarPorId(id: String): Observable<Barbeiro> {
    const url = `${this.baseUrl}/api/barbeiros/${id}`
    return this.http.get<Barbeiro>(url)
  }

  salvar(barbeiro: Barbeiro): Observable<Barbeiro>{
    const url = `${this.baseUrl}/api/barbeiros`
    return this.http.post<Barbeiro>(url, barbeiro);
  }

  deletar(id: String): Observable<void> {
    const url = `${this.baseUrl}/api/barbeiros/${id}`
    return this.http.delete<void>(url)
  }

  atualizar(barbeiro: Barbeiro): Observable<void> {
    const url = `${this.baseUrl}/api/barbeiros/${barbeiro.id}`
    return this.http.put<void>(url, barbeiro)
  }

}
