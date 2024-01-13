import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-barra-pesquisa',
  templateUrl: './barra-pesquisa.component.html',
  styleUrls: ['./barra-pesquisa.component.css']
})
export class BarraPesquisaComponent implements OnInit {
  matricula: string = '';
  serie: string = '';
  turno: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  pesquisar(): void {

    console.log('Matrícula:', this.matricula);
    console.log('Série:', this.serie);
    console.log('Turno:', this.turno);
  }
}
