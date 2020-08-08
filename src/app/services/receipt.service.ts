import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Receipt} from '../models/receipt';

@Injectable({
  providedIn: 'root'
})
export class ReceiptService {

  apiURL = 'http://localhost:10300/api/receipts';

  constructor(private http: HttpClient) { }

  create() {
    return this.http.post<Receipt>(this.apiURL, {});
  }

  addProduct(id , products) {
    return this.http.patch(`${this.apiURL}/${id}`,{products: products});
  }

}
