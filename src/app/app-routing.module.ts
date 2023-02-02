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

import { NewExperienciaComponent } from './componentes/form-new/new-experiencia/new-experiencia.component';
import { NewEducacionComponent } from './componentes/form-new/new-educacion/new-educacion.component';
import { NewCursoComponent } from './componentes/form-new/new-curso/new-curso.component';
import { NewAptitudComponent } from './componentes/form-new/new-aptitud/new-aptitud.component';
import { NewProyectoComponent } from './componentes/form-new/new-proyecto/new-proyecto.component';
import { PortadaComponent } from './componentes/portada/portada.component';

const routes: Routes = [
   {path:'',redirectTo:'portada',pathMatch:'full'},
   {path:'portada',component:PortadaComponent},
	{path:'abrirportfolio',component:LoginComponent},
	{path:'portfolio',component:PortfolioComponent},
   {path:'portfolio/acercade',component:PersonaComponent},
   {path:'portfolio/experiencias',component:ExperienciasComponent},
   {path:'portfolio/educacion',component:EducacionComponent},
   {path:'portfolio/cursos',component:CursosComponent},
   {path:'portfolio/aptitudes',component:AptitudesComponent},
   {path:'portfolio/proyectos',component:ProyectosComponent},
   
   {path:'portfolio/acercade/editar',component:EdtPersonaComponent},
   {path:'portfolio/experiencia/editar',component:EdtExperienciaComponent},
   {path:'portfolio/educacion/editar',component:EdtEducacionComponent},
   {path:'portfolio/curso/editar',component:EdtCursoComponent},
   {path:'portfolio/aptitud/editar',component:EdtAptitudComponent},
   {path:'portfolio/proyecto/editar',component:EdtProyectoComponent},
   
   /* {path:'portfolio/acercade/nueva',component:NewPersonaComponent}, */
   {path:'portfolio/experiencia/nueva',component:NewExperienciaComponent},
   {path:'portfolio/educacion/nueva',component:NewEducacionComponent},
   {path:'portfolio/curso/nuevo',component:NewCursoComponent},
   {path:'portfolio/aptitud/nueva',component:NewAptitudComponent},
   {path:'portfolio/proyecto/nuevo',component:NewProyectoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
