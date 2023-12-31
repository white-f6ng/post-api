    // Define an interface to represent the structure of the API response
interface items {
    status: boolean;
    show_status: string;
    message: string;
    server_time: string;
    data: {
      mst_product_has_count: number;
      sub_group_product_id: string;
      details: Array<{
        mst_cat_id: number;
        mst_cat_code: string;
        mst_cat_name: string;
        side_cat_count: number;
        // Define other properties within the details object as needed
      }>;
    };
  }
  
  // Define an interface for the product details
  interface ProductDetail {
    mst_product_id: number;
    mst_product_code: string;
    mst_product_name: string;
    // Define other properties within the product details as needed
  }
  