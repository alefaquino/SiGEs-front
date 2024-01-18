import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdicionarAlunosPageComponent } from './adicionar-alunos-page.component';

describe('AdicionarAlunosPageComponent', () => {
  let component: AdicionarAlunosPageComponent;
  let fixture: ComponentFixture<AdicionarAlunosPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdicionarAlunosPageComponent],
    });

    fixture = TestBed.createComponent(AdicionarAlunosPageComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have a form', () => {
    expect(component.alunoForm).toBeDefined();
  });

  it('should have a button for adding students', () => {
    const compiled = fixture.nativeElement;
    const addButton = compiled.querySelector('button');
    expect(addButton).toBeTruthy();
    expect(addButton.textContent).toContain('Adicionar Aluno');
  });


});
