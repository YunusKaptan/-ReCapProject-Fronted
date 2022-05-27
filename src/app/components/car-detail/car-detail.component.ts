import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarImage } from 'src/app/models/carImage';
import { Car } from 'src/app/models/cars';
import { CarImageService } from 'src/app/services/car-image.service';
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
     private carImageService: CarImageService,
     private activatedRoute:ActivatedRoute
     ) { }

     ngOnInit(): void {
      this.activatedRoute.params.subscribe(params=>{
        if (params["carId"]) {
         this.getCarDetails(params["carId"]) 
        } 
      })
    }

    getCarDetails(carId:number){
      this.carService.getCarDetails(carId).subscribe(response=>{
        this.cars=response.data})
    }
}
