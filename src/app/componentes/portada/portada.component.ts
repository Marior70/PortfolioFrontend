import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
   selector: 'app-portada',
   templateUrl: './portada.component.html',
   styleUrls: ['./portada.component.css']
})
export class PortadaComponent implements OnInit {
   miNombre: any;
   constructor(private datosPortfolio: PortfolioService, private ruta: Router) { }

   ngOnInit(): void {
      this.datosPortfolio.obtenerDatos().subscribe(datos => {
         // console.log("Datos personales: " + JSON.stringify(data));

         // Si tenemos un único Json con un array de cada componente, que a su vez contiene un array de items de dicho componente, se debe referenciar con el índice respectivo para obtener los datos de cada componente:
         // this.misDatos = datos[0] en el caso de 'personas', [1] para experiencias, [2] educacion, [3] cursos, [4] aptitudes y [5] proyectos;

         // Si tenemos un único Json con cada componente declarado dentro:
         // this.miNombre = datos.personas[0]; // Le asignamos el primer registro de json, que es el que corresponde al encabezado

         // Si cada componente tiene su json:
         this.miNombre = datos;

         
      });
   }
   login() {
      this.ruta.navigate(['login']); 
   }
}
