import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map,catchError,of, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class SampserviceService {

  constructor(public http:HttpClient) { }


  public apiUrl='http://appspos.apdeliver.com/AppsPOSDemoSAS/api/apis/Get_Category_By_ProductId';



showproducts(requestPayload:any){
  console.log(this.apiUrl)
  const headers = new HttpHeaders({ 'Content-Type': 'application/json', });
  
  return this.http.post(this.apiUrl, requestPayload,{headers})
  
}








}
