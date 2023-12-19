import { Component } from '@angular/core';
import { SampserviceService } from '../sampservice.service';
import { Requestpayload,defaultpayload } from '../request/requestpayload';
import { ApiResponse,Product } from '../api-response';





@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent {
  mst_product_id?: number;
  branch_id?:number;
  repeatCombo: boolean = false;

  requestPayload: Requestpayload={...defaultpayload};
  responseData: ApiResponse|any;  
  buttonClicked:boolean=false;
  showCheckedItemsSection: boolean = false;
  checkedItems: any[] = [];

  constructor(private sampservice: SampserviceService) {}
  

  sendRequest() { 
    
    this.buttonClicked=true;
    console.log('send request')
    this.requestPayload = this.sampservice.getRequestPayLoad();
    
      
    if (
      this.requestPayload.mst_product_id &&
      this.requestPayload.branch_id &&
      this.repeatCombo
    ){      this.sampservice.showproducts(this.requestPayload).subscribe(
        (response) => {
          this.responseData = response; 
          console.log(this.responseData)
        },
        (error) => console.error("error is", error)
      );
    } else {
      console.log("conditions not met")
    }
    // this.mst_product_id = undefined;
    // this.branch_id = undefined;
    // this.repeatCombo = false;
  }
  showCheckedItems() {
    
    this.checkedItems = [];
    for (let detail of this.responseData.data.details) {
      let checkedProducts = detail.product_details.filter((product: Product) => product.isChecked);
  
      if (checkedProducts.length > 0) {
        this.checkedItems.push({
          mst_cat_name: detail.mst_cat_name,
          items: checkedProducts
        });
      }
    }
    
        
    this.showCheckedItemsSection = true;
  
  }
  
  
}

