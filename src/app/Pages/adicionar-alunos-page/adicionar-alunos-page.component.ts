import { Component } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-adicionar-alunos-page',
  templateUrl: './adicionar-alunos-page.component.html',
  styleUrls: ['./adicionar-alunos-page.component.css'],
})
export class AdicionarAlunosPageComponent {
  selectedDate: Date | null = null; // Inicializando a propriedade com null
  alunoForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    // Inicializando o formulário com validadores simples para o nome do aluno
    this.alunoForm = this.formBuilder.group({
      nomeAluno: ['', Validators.required],
    });
  }

  // Método chamado quando a data é selecionada no datepicker
  dateChanged(event: Event): void {
    if (event instanceof MatDatepickerInputEvent) {
      this.selectedDate = event.value;
    }
  }
  adicionarAluno() {
    if (this.alunoForm.valid) {
      const nomeAlunoControl = this.alunoForm.get('nomeAluno');

      if (nomeAlunoControl && nomeAlunoControl.valid) {
        const nomeAluno = nomeAlunoControl.value;
        // Aqui você pode fazer o que quiser com o nome do aluno e a data selecionada
        console.log('Nome do aluno:', nomeAluno);
        console.log('Data selecionada:', this.selectedDate);

        // Também pode ser útil redefinir o formulário e a data após adicioná-los
        this.alunoForm.reset();
        this.selectedDate = null;
      }
  } }
}
