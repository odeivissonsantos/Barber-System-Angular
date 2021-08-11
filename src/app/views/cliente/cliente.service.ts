import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient) { }

  listarTodos():Observable<Cliente[]> {
    const url = `${this.baseUrl}/api/clientes`
    return this.http.get<Cliente[]>(url)
  }

  buscarPorId(id: String): Observable<Cliente> {
    const url = `${this.baseUrl}/api/clientes/${id}`
    return this.http.get<Cliente>(url)
  }

  salvar(cliente: Cliente): Observable<Cliente>{
    const url = `${this.baseUrl}/api/clientes`
    return this.http.post<Cliente>(url, cliente);
  }

  deletar(id: String): Observable<void> {
    const url = `${this.baseUrl}/api/clientes/${id}`
    return this.http.delete<void>(url)
  }

  atualizar(cliente: Cliente): Observable<void> {
    const url = `${this.baseUrl}/api/clientes/${cliente.id}`
    return this.http.put<void>(url, cliente)
  }

}
