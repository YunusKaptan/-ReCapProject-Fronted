import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';
import { SingleResponseModel } from '../models/singleResponseModel';
import { CarDetails } from '../models/carDetails';
import { Rental } from '../models/rental';


@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl ="https://localhost:44374/api/"

  constructor(private httpClient:HttpClient) { }
  
  getCars():Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getcardetails"
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  };

  getCarsByBrand(brandId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getcarsbybrandid?brandId="+brandId
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  };

  getCarsByColor(colorId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getcarsbycolorid?colorId="+colorId
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  };

  getCarsById(carId:number):Observable<SingleResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getcarsbyid?id"+carId
    return this.httpClient.get<SingleResponseModel<Car>>(newPath)
  };
  getCarDetailByColorAndBrand(colorId:number, brandId:number):Observable<ListResponseModel<CarDetails>>{
    let newPath=this.apiUrl + "cars/getcardetailsbycolorandbybrand?colorId="+colorId+ "&brandId=" +brandId;
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath);
  }

  getCarDetailsByCarId(carId:number):Observable<ListResponseModel<CarDetails>>{
    let newPath=this.apiUrl+"cars/getcardetailsbycarid?carId=" +carId;
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath);
  }
  getCarDetails(carId:number):Observable<ListResponseModel<CarDetails>>{
    let newPath=this.apiUrl+"cars/getcardetails?carId=" +carId;
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath);
  }
  getByCarId(carId:number):Observable<SingleResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getbycarid?carId="+carId;
    return this.httpClient.get<SingleResponseModel<Car>>(newPath)
  }
}
