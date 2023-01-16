import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';


@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
   title = 'frontend';
   miNombre: any;
   constructor(private datosPortfolio: PortfolioService) { }

   ngOnInit(): void {
      this.datosPortfolio.obtenerDatos().subscribe(datos => {
         this.miNombre = datos.personas;
      });
   }
}
