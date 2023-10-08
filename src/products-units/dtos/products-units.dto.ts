export interface ProductsUnitsDto {
  correlative: number;

  unit: string;

  product_code: string;

  main_unit: boolean;

  conversion_factor: number;

  unit_type: number;

  show_in_screen: boolean;

  is_for_buy: boolean;

  is_for_sale: boolean;

  unitary_cost: number;

  calculated_cost: number;

  average_cost: number;

  perc_waste_cost: number;

  perc_handling_cost: number;

  perc_operating_cost: number;

  perc_additional_cost: number;

  maximum_price: number;

  offer_price: number;

  higher_price: number;

  minimum_price: number;

  perc_maximum_price: number;

  perc_offer_price: number;

  perc_higher_price: number;

  perc_minimum_price: number;

  perc_freight_cost: number;

  perc_discount_provider: number;

  lenght: number;

  height: number;

  width: number;

  weight: number;

  capacitance: number;
}
