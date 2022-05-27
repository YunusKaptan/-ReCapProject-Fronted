import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  apiUrl ="https://localhost:44374/api/"

  constructor(private httpClient:HttpClient) { }

  getCarImages(carId:Number):Observable<ListResponseModel<CarImage>>{
    let newPath= this.apiUrl + "carimages/getbycarid?carId=" +carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }
}
