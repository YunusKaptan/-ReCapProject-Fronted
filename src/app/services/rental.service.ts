import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { RentalDetails } from '../models/rentalDetails';
import { ResponseModel } from '../models/responseModel';


@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl ="https://localhost:44374/api/rentals"

  constructor(private httpClient:HttpClient) { }

  getRentals():Observable<ListResponseModel<RentalDetails>>{
    let newPath=this.apiUrl+"getrentalsdetails"
    return this.httpClient.get<ListResponseModel<RentalDetails>>(newPath);
  }
  isCarAvaible(carId:number){
    let newPath=this.apiUrl+"/iscaravaible?carId?carId="+carId;
    return this.httpClient.get<ResponseModel>(newPath);

  }
}
