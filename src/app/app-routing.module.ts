import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';

const routes: Routes = [
	{path:'',redirectTo:'abrirportfolio',pathMatch:'full'},
	{path:'abrirportfolio',component:LoginComponent},
	{path:'portfolio',component:PortfolioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
