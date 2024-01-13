import { Component } from '@angular/core';


@Component({
  selector: 'app-sua-componente',
  templateUrl: './adicionar-alunos.component.html',
  styleUrls: ['./adicionar-alunos.component.css']
})
export class AdicionarAlunoComponent {
  enrolledStudents: any[] = [];
  novaMatricula: string = '';
  novaSerie: string = '';
  novoTurno: string = '';

  adicionarNovoAluno() {
    const novoAluno = { matricula: this.novaMatricula, serie: this.novaSerie, turno: this.novoTurno };
    this.enrolledStudents.push(novoAluno);


    this.novaMatricula = '';
    this.novaSerie = '';
    this.novoTurno = '';
  }
}
