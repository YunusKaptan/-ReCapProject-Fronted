import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from 'src/app/services/car.service';
import { BrandService } from 'src/app/services/brand.service';
import { ColorService } from 'src/app/services/color.service';
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';
import { CarDetails } from 'src/app/models/carDetails';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';
import { Car } from 'src/app/models/car';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';



@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars: CarDetails[]=[];
  carImages:CarImage[]=[];
  baseUrl="https://localhost:44374/Uploads/Images/"
  imageOfPath:string;  
  brands:Brand[] = [];
  colors:Color[] = [];
  filterText="";
  colorrFilter:number=0;
  branddFilter:number=0;


  constructor(
  private carService: CarService,
  private brandService:BrandService,
  private colorService:ColorService,
  private activatedRoute: ActivatedRoute,
  private carImageService:CarImageService,
  private toastrService:ToastrService,
  private cartService:CartService )
   {}

  ngOnInit(): void {

    this.getBrands();
    this.getColors();
    
    this.activatedRoute.params.subscribe(params=>{
      if(params["colorId"] && params["brandId"]){
        this.getCarDetailByColorAndBrand(params["colorId"],params["brandId"])
      }
      
      else if (params["brandId"]) {
        this.getCarsByBrand(params["brandId"])
      }
      
      else if(params["colorId"]) {
        this.getCarsByColor(params["colorId"])
      }
      else {
        this.getCars();
      }
    })
  }

  getCars(){
    this.carService.getCars().subscribe(response=>{
      this.cars=response.data

    });
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response=>{
      this.brands=response.data
      
      });     

  }

  getColors(){
    this.colorService.getColors().subscribe(response=>{
      this.colors=response.data
    
    });

  }

  getCarsByBrand(brandId:number){
    this.carService.getCarsByBrand(brandId).subscribe(response=>{
      this.cars=response.data
    });
  }

  getCarsByColor(colorId:number){
    this.carService.getCarsByColor(colorId).subscribe(response=>{
      this.cars=response.data
    });
  }

  getCarDetailByColorAndBrand(colorId: number, brandId: number) {
    this.carService.getCarDetailByColorAndBrand(colorId, brandId)
      .subscribe((response) => {
        console.log(response)
        this.cars = response.data;
      });
  }
  image(carId:number){
    this.carImageService.getCarImagesByCarId(carId).subscribe(response=>{
      const imagePath=response.data[0].imagePath
      this.imageOfPath= this.baseUrl+imagePath;
      console.log(this.imageOfPath)
    })
    return this.imageOfPath
  }

  addToCart(car:Car){
    this.toastrService.success("Added to favorites", car.brandName)
    this.cartService.addToCart(car);
  }

 
}