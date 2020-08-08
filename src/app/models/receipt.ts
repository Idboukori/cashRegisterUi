import {Product} from './product';

export interface Receipt {
  id?: number;
  products: Product[];
}
