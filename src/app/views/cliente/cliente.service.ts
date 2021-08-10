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
}
