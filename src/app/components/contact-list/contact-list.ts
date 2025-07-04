import { Component, OnInit } from '@angular/core';
import { Contato, ContatoService } from '../../services/contato';


@Component({
  standalone: false,
  selector: 'app-contact-list',
  templateUrl: './contact-list.html',
  styleUrls: ['./contact-list.css']
})
export class ContactList implements OnInit {
  contatos: Contato[] = [];
  filtro: string = '';
  categorias: string[] = ['Família', 'Trabalho', 'Escola', 'Outros'];
  categoriaSelecionada: string = '';
  mostrarFavoritos: boolean = false;

  constructor(private service: ContatoService) {}

  ngOnInit(): void {
    this.carregarTodos();
  }

  carregarTodos(): void {
    this.service.getAll().subscribe(c => this.contatos = c);
  }

  aplicarFiltros(): void {
    if (this.mostrarFavoritos) {
      this.service.getFavoritos().subscribe(c => this.contatos = c);
    } else if (this.categoriaSelecionada) {
      this.service.getByCategoria(this.categoriaSelecionada).subscribe(c => this.contatos = c);
    } else if (this.filtro.trim()) {
      this.service.search(this.filtro).subscribe(c => this.contatos = c);
    } else {
      this.carregarTodos();
    }
  }

  toggleFavoritos(): void {
    this.mostrarFavoritos = !this.mostrarFavoritos;
    this.aplicarFiltros();
  }

  onCategoriaChange(cat: string): void {
    this.categoriaSelecionada = cat;
    this.aplicarFiltros();
  }

  onSearch(): void {
    this.aplicarFiltros();
  }
}
