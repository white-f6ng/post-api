export interface Requestpayload {


    api_key: string;
      language_code: string;
      device_id: string;
      device_token: string;
      device_type: string;
      mst_product_id: number;
      branch_id: number;
      price_type: number;
      dishtype_id: string;
      is_for_repeat_set_combo: number;
}
export const defaultpayload:Requestpayload={
    api_key: "string",
      language_code: "string",
      device_id: "string",
      device_token: "string",
      device_type: "string",
      mst_product_id: 0,
      branch_id: 0,
      price_type: 0,
      dishtype_id: "string",
      is_for_repeat_set_combo:0,

}