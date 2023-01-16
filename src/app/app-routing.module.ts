import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { PersonaComponent } from './componentes/persona/persona.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { ExperienciasComponent } from './componentes/experiencias/experiencias.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { CursosComponent } from './componentes/cursos/cursos.component';
import { AptitudesComponent } from './componentes/aptitudes/aptitudes.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { EdtPersonaComponent } from './componentes/form-edt/edt-persona/edt-persona.component';
import { EdtExperienciaComponent } from './componentes/form-edt/edt-experiencia/edt-experiencia.component';
import { EdtEducacionComponent } from './componentes/form-edt/edt-educacion/edt-educacion.component';
import { EdtCursoComponent } from './componentes/form-edt/edt-curso/edt-curso.component';
import { EdtAptitudComponent } from './componentes/form-edt/edt-aptitud/edt-aptitud.component';
import { EdtProyectoComponent } from './componentes/form-edt/edt-proyecto/edt-proyecto.component';
import { NewPersonaComponent } from './componentes/form-new/new-persona/new-persona.component';
import { NewExperienciaComponent } from './componentes/form-new/new-experiencia/new-experiencia.component';
import { NewEducacionComponent } from './componentes/form-new/new-educacion/new-educacion.component';
import { NewCursoComponent } from './componentes/form-new/new-curso/new-curso.component';
import { NewAptitudComponent } from './componentes/form-new/new-aptitud/new-aptitud.component';
import { NewProyectoComponent } from './componentes/form-new/new-proyecto/new-proyecto.component';

const routes: Routes = [
	// {path:'',redirectTo:'abrirportfolio',pathMatch:'full'},
	{path:'abrirportfolio',component:LoginComponent},
	{path:'portfolio',component:PortfolioComponent},
   {path:'acercade',component:PersonaComponent},
   {path:'experiencias',component:ExperienciasComponent},
   {path:'educacion',component:EducacionComponent},
   {path:'cursos',component:CursosComponent},
   {path:'aptitudes',component:AptitudesComponent},
   {path:'proyectos',component:ProyectosComponent},
   {path:'acercade/editar',component:EdtPersonaComponent},
   {path:'experiencias/editar',component:EdtExperienciaComponent},
   {path:'educacion/editar',component:EdtEducacionComponent},
   {path:'cursos/editar',component:EdtCursoComponent},
   {path:'aptitudes/editar',component:EdtAptitudComponent},
   {path:'proyectos/editar',component:EdtProyectoComponent},
   {path:'acercade/nueva',component:NewPersonaComponent},
   {path:'experiencias/nueva',component:NewExperienciaComponent},
   {path:'educacion/nueva',component:NewEducacionComponent},
   {path:'cursos/nueva',component:NewCursoComponent},
   {path:'aptitudes/nueva',component:AptitudesComponent},
   {path:'proyectos/nueva',component:NewProyectoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
