import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  car = {
    carId: 1,
    categoryId: 1,
    brandId: 1,
    colorId: 1,
    modelYear: 2010,
    dailyPrice: 120,
    description: 'Fiat',
  };
  car2 = {
    carId: 2,
    categoryId: 1,
    brandId: 1,
    colorId: 1,
    modelYear: 2010,
    dailyPrice: 150,
    description: 'Mercedes',
  };
  car3 = {
    carId: 3,
    categoryId: 1,
    brandId: 1,
    colorId: 1,
    modelYear: 2012,
    dailyPrice: 170,
    description: 'X5',
  };
  car4 = {
    carId: 4,
    categoryId: 1,
    brandId: 1,
    colorId: 1,
    modelYear: 2013,
    dailyPrice: 190,
    description: 'BMW',
  };
  car5 = {
    carId: 5,
    categoryId: 1,
    brandId: 1,
    colorId: 1,
    modelYear: 2014,
    dailyPrice: 210,
    description: 'Porsche',
  };
  cars = [
    this.car,
    this.car2, 
    this.car3, 
    this.car4, 
    this.car5
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
