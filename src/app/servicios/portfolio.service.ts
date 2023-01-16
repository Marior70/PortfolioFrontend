import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
   providedIn: 'root'
})
export class PortfolioService {
   ruta: string = "./assets/datos/"
   // url: string = "http://localhost:8080/api/";
   constructor(private http: HttpClient) { }

   obtenerDatos(): Observable<any> {
      
      // Versión para obtener los datos de un json ubicado en la carpeta ./assets/datos/
      return this.http.get(this.ruta + 'datosLatin.json');

      // Versión para obtener los datos de json independientes ubicados en la carpeta ./assets/datos/
      //return this.http.get(this.ruta + 'personas.json' +'&' + this.ruta + 'experiencias.json' +'&' + this.ruta + 'educacion.json' +'&' + this.ruta + 'cursos.json' +'&' + this.ruta + 'habilidades.json' +'&' + this.ruta + 'proyectos.json');

      // Versión para obtener los datos desde una URL de una api en un servidor Backend
      // return this.http.get<any> (this.url + "&persona" + "&experiencias" + "&educacion" + "&cursos" + "&aptitudes" + "&proyectos");
   }

}
