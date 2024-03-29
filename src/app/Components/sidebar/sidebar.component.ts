import { Component, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @ViewChild(MatMenuTrigger) alunoMenuTrigger?: MatMenuTrigger;
  showAlunoMenu: boolean = false;
  alunosActive: boolean = false;

  @ViewChild(MatMenuTrigger) professorMenuTrigger?: MatMenuTrigger;
  showProfessorMenu: boolean = false;
  professorActive: boolean = false;

  toggleAlunoMenu() {
    if (this.alunoMenuTrigger) {
      this.showAlunoMenu = !this.showAlunoMenu;
      this.alunosActive = !this.alunosActive;

      this.alunoMenuTrigger.menuClosed.subscribe(() => {
        this.showAlunoMenu = false;
        this.alunosActive = false;
      });
    }
  }

  toggleProfessorMenu() {
    if (this.professorMenuTrigger) {
      this.showProfessorMenu = !this.showProfessorMenu;
      this.professorActive = !this.professorActive;

      this.professorMenuTrigger.menuClosed.subscribe(() => {
        this.showProfessorMenu = false;
        this.professorActive = false;
      });
    }
  }
}
