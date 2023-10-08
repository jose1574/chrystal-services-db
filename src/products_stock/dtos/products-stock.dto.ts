export interface ProductsStockDto {
  product_code: string;

  store: string;

  locations: string;

  stock: number;

  ordered_stock: number;

  committed_stock: number;
}
