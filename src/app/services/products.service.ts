import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  apiURL = 'http://localhost:10300/api/products';

  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get<Product[]>(this.apiURL);
  }

  delete(id) {
    return this.http.delete(`${this.apiURL}/${id}`);
  }

  add(product) {
    return this.http.post<Product>(this.apiURL, product);
  }

  getOne(barcode) {
    return this.http.get<Product[]>(`${this.apiURL}?barcode=${barcode}`);
  }
}
