import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonaComponent } from './componentes/persona/persona.component';
import { ExperienciasComponent } from './componentes/experiencias/experiencias.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { CursosComponent } from './componentes/cursos/cursos.component';
import { AptitudesComponent } from './componentes/aptitudes/aptitudes.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { LoginComponent } from './componentes/login/login.component';
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
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    ExperienciasComponent,
    EducacionComponent,
    CursosComponent,
    AptitudesComponent,
    ProyectosComponent,
    PortfolioComponent,
    LoginComponent,
    EdtPersonaComponent,
    EdtExperienciaComponent,
    EdtEducacionComponent,
    EdtCursoComponent,
    EdtAptitudComponent,
    EdtProyectoComponent,
    NewExperienciaComponent,
    NewEducacionComponent,
    NewCursoComponent,
    NewAptitudComponent,
    NewProyectoComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
