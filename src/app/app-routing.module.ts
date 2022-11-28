import { NovoCadastroComponent } from './views/novo-cadastro/novo-cadastro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { LoginComponent  } from './views/login/login.component';
import { NovoEmprestimoComponent } from './views/novo-emprestimo/novo-emprestimo.component';
import { EditarEmprestimoComponent } from './views/editar-emprestimo/editar-emprestimo.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent,
    title: "Home | Bibliotech"
  },
  {
    path: 'login',
    component: LoginComponent,
    title: "Login | Bibliotech"
  },
  {
    path: 'cadastrar',
    component: NovoCadastroComponent,
    title: "Cadastrar | Bibliotech"
  },
  {
    path: 'emprestar',
    component: NovoEmprestimoComponent,
    title: "Emprestar | Bibliotech"
  },
  {
    path: 'editar/:id',
    component: EditarEmprestimoComponent,
    title: "Editar | Bibliotech"
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    title: "Dashboard | Bibliotech"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
