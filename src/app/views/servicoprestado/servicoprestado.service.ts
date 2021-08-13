import { ServicoPrestado } from './servicoprestado.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicoprestadoService {
  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient) { }

  listarTodos():Observable<ServicoPrestado[]> {
    const url = `${this.baseUrl}/api/servicos-prestados`
    return this.http.get<ServicoPrestado[]>(url)
  }

  buscarPorId(id: String): Observable<ServicoPrestado> {
    const url = `${this.baseUrl}/api/servicos-prestados/${id}`
    return this.http.get<ServicoPrestado>(url)
  }

  salvar(servicoprestado: ServicoPrestado): Observable<ServicoPrestado>{
    const url = `${this.baseUrl}/api/servicos-prestados`
    return this.http.post<ServicoPrestado>(url, servicoprestado);
  }

  deletar(id: String): Observable<void> {
    const url = `${this.baseUrl}/api/servicos-prestados/${id}`
    return this.http.delete<void>(url)
  }

  atualizar(servicoprestado: ServicoPrestado): Observable<void> {
    const url = `${this.baseUrl}/api/servicos-prestados/${servicoprestado.id}`
    return this.http.put<void>(url, servicoprestado)
  }


}
