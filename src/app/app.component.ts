import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PortfolioService } from 'src/app/servicios/portfolio.service';


@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
   title = 'frontend';
   miNombre: any;
   constructor(private datosPortfolio: PortfolioService, private ruta: Router) { }

   ngOnInit(): void {
      this.datosPortfolio.obtenerDatos().subscribe(datos => {
         this.miNombre = datos.personas[0];
      });
   }

   login() {
      this.ruta.navigate(['login']);
   }
}
