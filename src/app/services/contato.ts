// src/app/services/contato.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Contato {
  id?: number;
  nome: string;
  telefone: string;
  email: string;
  endereco: string;
  cidade: string;
  categoria: string;
  favorito: boolean;
  notas: string;
  empresa: string;
  cargo: string;
}

@Injectable({ providedIn: 'root' })
export class ContatoService {
  private apiUrl = 'http://localhost:8080/contatos';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Contato[]> {
    return this.http.get<Contato[]>(this.apiUrl);
  }

  getById(id: number): Observable<Contato> {
    return this.http.get<Contato>(`${this.apiUrl}/${id}`);
  }

  create(contato: Contato): Observable<Contato> {
    return this.http.post<Contato>(this.apiUrl, contato);
  }

  update(id: number, contato: Contato): Observable<Contato> {
    return this.http.put<Contato>(`${this.apiUrl}/${id}`, contato);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  search(term: string): Observable<Contato[]> {
    return this.http.get<Contato[]>(`${this.apiUrl}/search?termo=${term}`);
  }

  getByCategoria(cat: string): Observable<Contato[]> {
    return this.http.get<Contato[]>(`${this.apiUrl}/categoria/${cat}`);
  }

  getFavoritos(): Observable<Contato[]> {
    return this.http.get<Contato[]>(`${this.apiUrl}/favoritos`);
  }
}
