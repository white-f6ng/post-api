import { Component } from '@angular/core';
import { SampserviceService } from '../sampservice.service';

interface Product {
  mst_product_name: string;
  mst_product_code: string;
  isChecked: boolean;
 
}
interface CheckedItem {
  mst_cat_name: string;
  product_details: Product[];
}




@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent {
  mst_product_id?: number;
  branch_id?:number;
  repeatCombo: boolean = false;

  requestPayload: any;
  responseData: any;  
  buttonClicked:boolean=false;
  showCheckedItemsSection: boolean = false;
  checkedItems: any[] = [];

  constructor(private sampservice: SampserviceService) {}
  

  sendRequest() {
    
    this.buttonClicked=true;
    console.log('send request')
    this.requestPayload = {
      api_key: "BBw9cGiMpd56IFZz7m24Fm8L4f4f51FMEMGQKhytAsrL+5fNUqeZiM6TuM2ibw4yjWxFGOFAa+1Q6/Vt2YjNHMOAIR45Uy7o88m737ZXTWM=",
      language_code: "en",
      device_id: "2CEC3804-46E6-4803-8982-88CFFCD402DD",
      device_token: "ex7n_U-pwlQ:APA91bGwFupIdjXEJqs4ZtdRwXLPPopDqwIU0gOH5n38ZPFEROk8WdAPQMsBxPLRd_3d8J3qIrUqUp8mEEvUjapCj7LVEOPO3kDt1lGT6r9L1C6VntoYuwbZnstfOSaZxeFXnibJXWKj",
      device_type: "android",
      mst_product_id: 41199,
      branch_id: 4,
      price_type: 1,
      dishtype_id: "0",
      is_for_repeat_set_combo: 0
    };

    
    
      
    if (
      this.requestPayload.mst_product_id &&
      this.requestPayload.branch_id &&
      this.repeatCombo
    ){      this.sampservice.showproducts(this.requestPayload).subscribe(
        (response: any) => {
          this.responseData = response; 
          console.log(this.responseData)
        },
        (error: any) => console.error("error is", error)
      );
    } else {
      console.log("conditions not met")
    }
    this.mst_product_id = undefined;
    this.branch_id = undefined;
    this.repeatCombo = false;
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

