import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ContatoService } from './contato';

describe('ContatoService', () => {
  let service: ContatoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ContatoService]
    });
    service = TestBed.inject(ContatoService);
  });

  it('deve ser criado', () => {
    expect(service).toBeTruthy();
  });
});
