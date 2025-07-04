import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contato, ContatoService } from '../../services/contato';

@Component({
  standalone: false,
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.html',
  styleUrls: ['./contact-detail.css']
})
export class ContactDetail implements OnInit {
  contato!: Contato;

  constructor(
    private service: ContatoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getById(id).subscribe(c => this.contato = c);
  }

  toggleFavorito(): void {
    const atualizado = { ...this.contato, favorito: !this.contato.favorito };
    this.service.update(this.contato.id!, atualizado)
      .subscribe(c => this.contato = c);
  }

  excluir(): void {
    if (confirm('Confirma exclusão deste contato?')) {
      this.service.delete(this.contato.id!).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }
}
