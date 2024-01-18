import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicionarAlunosPageComponent } from './Pages/adicionar-alunos-page/adicionar-alunos-page.component';
import { InicioPageComponent } from './Pages/inicio-page/inicio-page.component';
import { BarraPesquisaComponent } from './Components/barra-pesquisa/barra-pesquisa.component';

import { FinanceiroPageComponent } from './Pages/financeiro-page/financeiro-page.component';
import { DocumentacaoPageComponent } from './Pages/documentacao-page/documentacao-page.component';
import { ConsultarAlunoPageComponent } from './Pages/consultar-aluno-page/consultar-aluno-page.component';

const routes: Routes = [


  { path: 'adicionar-alunos', component: AdicionarAlunoComponent },
  { path: 'login', redirectTo: 'login', pathMatch: 'full' },
  { path: 'adicionar-alunos-page', component: AdicionarAlunosPageComponent },
  { path: 'inicio-page', component: InicioPageComponent},
  {path: 'barra-pesquisa',component: BarraPesquisaComponent}


  { path: 'aluno/adicionar', component: AdicionarAlunosPageComponent },
  { path: 'aluno/consultar', component: ConsultarAlunoPageComponent },
  { path: 'adicionarAluno', component: AdicionarAlunosPageComponent },
  { path: 'financeiro', component: FinanceiroPageComponent },
  { path: 'documentacao', component: DocumentacaoPageComponent },
  { path: '', component: InicioPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}



