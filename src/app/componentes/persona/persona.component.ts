import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
   selector: 'app-persona',
   templateUrl: './persona.component.html',
   styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
   misDatos: any;
   constructor(private datosPortfolio: PortfolioService) { }

   ngOnInit(): void {
      this.datosPortfolio.obtenerDatos().subscribe(datos => {
         // console.log("Datos personales: " + JSON.stringify(data));

         // Si tenemos un único Json con los datos de cada componente, cada componente es un elemento de un array, por lo tanto se debe referenciar con el índice respectivo para obtener los datos.
         // this.misDatos = datos[0];

         this.misDatos = datos.personas[0]; // Le asignamos el primer registro de json, que es el que corresponde al encabezado
      });
   }
}