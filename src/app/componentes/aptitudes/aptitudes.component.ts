import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
	selector: 'app-aptitudes',
	templateUrl: './aptitudes.component.html',
	styleUrls: ['./aptitudes.component.css']
})
export class AptitudesComponent implements OnInit{
	aptitudesList: any;
	constructor(private datosPortfolio: PortfolioService) { }

	ngOnInit(): void {
		this.datosPortfolio.obtenerDatos().subscribe(datos => {
			this.aptitudesList = datos.aptitudes;
		});
	}
}
