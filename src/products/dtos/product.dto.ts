export interface ProductsDto {
  code: string;

  description: string;

  short_name: string;

  mark: string;

  model: string;

  reference: string;

  department: string;

  days_warranty: number;

  sale_tax: string;

  buy_tax: string;

  rounding_type: number;

  costing_type: number;

  discount: number;

  max_discount: number;

  minimal_sale: number;

  maximal_sale: number;

  status: string;

  origin: string;

  take_department_utility: boolean;

  allow_decimal: boolean;

  edit_name: boolean;

  sale_price: number;

  product_type: string;

  technician: string;

  request_technician: boolean;

  serialized: boolean;

  request_details: boolean;

  request_amount: boolean;

  coin: string;

  allow_negative_stock: boolean;

  use_scale: boolean;

  add_unit_description: boolean;

  use_lots: boolean;

  lots_order: number;

  minimal_stock: number;

  notify_minimal_stock: boolean;

  size: string;

  color: string;

  extract_net_from_unit_cost_plus_tax: boolean;

  extract_net_from_unit_price_plus_tax: boolean;

  maximum_stock: number;
}
