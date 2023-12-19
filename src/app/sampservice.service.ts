import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map,catchError,of, Observable } from 'rxjs';
import { Requestpayload } from './request/requestpayload';



@Injectable({
  providedIn: 'root'
})
export class SampserviceService {

  constructor(public http:HttpClient) { }


  public apiUrl='http://appspos.apdeliver.com/AppsPOSDemoSAS/api/apis/Get_Category_By_ProductId';



showproducts(requestPayload:Requestpayload){
  // console.log(this.apiUrl)
  const headers = new HttpHeaders({ 'Content-Type': 'application/json', });
  
  return this.http.post(this.apiUrl, requestPayload,{headers})
  
}


getRequestPayLoad(): RequestPayload {
    return {
      api_key:
        'BBw9cGiMpd56IFZz7m24Fm8L4f4f51FMEMGQKhytAsrL+5fNUqeZiM6TuM2ibw4yjWxFGOFAa+1Q6/Vt2YjNHMOAIR45Uy7o88m737ZXTWM=',
      language_code: 'en',
      device_id: '2CEC3804-46E6-4803-8982-88CFFCD402DD',
      device_token:
        'ex7n_U-pwlQ:APA91bGwFupIdjXEJqs4ZtdRwXLPPopDqwIU0gOH5n38ZPFEROk8WdAPQMsBxPLRd_3d8J3qIrUqUp8mEEvUjapCj7LVEOPO3kDt1lGT6r9L1C6VntoYuwbZnstfOSaZxeFXnibJXWKj',
      device_type: 'android',
      mst_product_id: 41199,
      branch_id: 4,
      price_type: 1,
      dishtype_id: '0',
      is_for_repeat_set_combo: 0,
    };
  }





}
