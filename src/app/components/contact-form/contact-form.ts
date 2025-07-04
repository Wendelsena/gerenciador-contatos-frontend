import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Contato, ContatoService } from '../../services/contato';

@Component({
  standalone: false,
  selector: 'app-contact-form',
  templateUrl: './contact-form.html',
  styleUrls: ['./contact-form.css']
})
export class ContactForm implements OnInit {
  form!: FormGroup;
  contatoId: number | null = null;
  categorias = ['Família', 'Trabalho', 'Escola', 'Outros'];

  constructor(
    private fb: FormBuilder,
    private service: ContatoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      telefone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      endereco: [''],
      cidade: [''],
      categoria: ['', Validators.required],
      favorito: [false],
      notas: [''],
      empresa: [''],
      cargo: ['']
    });

    this.contatoId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.contatoId) {
      this.service.getById(this.contatoId)
        .subscribe(c => this.form.patchValue(c));
    }
  }

  onSubmit(): void {
    if (this.form.invalid) return;

    const dados: Contato = this.form.value;
    const obs = this.contatoId
      ? this.service.update(this.contatoId, dados)
      : this.service.create(dados);

    obs.subscribe(() => this.router.navigate(['/']));
  }
}
