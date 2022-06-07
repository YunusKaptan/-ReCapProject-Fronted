import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CarService } from 'src/app/services/car.service';
import { CarDetails } from 'src/app/models/carDetails';


@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  cars:CarDetails[]=[];
  dataLoaded = false;

  constructor(private carService: CarService,
     private activatedRoute:ActivatedRoute
     ) { }

     ngOnInit(): void {
      this.activatedRoute.params.subscribe(params=>{
        if (params["carId"]) {
         this.getCarDetailsByCarId(params["carId"]) 
        } 
      })
    }

    getCarDetailsByCarId(carId:number){
      this.carService.getCarDetailsByCarId(carId).subscribe(response=>{
        this.cars=response.data})
    }
}
