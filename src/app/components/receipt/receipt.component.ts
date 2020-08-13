import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../services/products.service';
import {Product} from '../../models/product';
import {ReceiptService} from '../../services/receipt.service';
import {Receipt} from '../../models/receipt';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent implements OnInit {

  product: Product ;

  receipt: Receipt;

  receiptProducts : object = {};

  listBarcodes : string[] = []

  barcode: string;

  subtotal: number = 0;

  tax: number = 0;

  receiptCreation : boolean = false;

  constructor(private productService: ProductsService,private receiptService : ReceiptService) { }

  ngOnInit(): void {
  }

  getProduct() {
    this.productService.getOne(this.barcode)
      .subscribe(products => this.product = products['data'],
        error => console.log(error));
  }


  createReceipt(){
    this.receiptService.create()
      .subscribe((receipt) => {
        this.receipt = receipt;
        this.receiptCreation = true;
      });
  }

  addProductToReceipt(product){
    this.receiptService.addProduct(this.receipt,product)
      .subscribe(
        res => {
          console.log('received ok response from patch request');
          console.log(res)
          if(product.barcode in this.receiptProducts){
            this.receiptProducts[product.barcode]['amount']++;
            this.receiptProducts[product.barcode]['total'] = product.cost*this.receiptProducts[product.barcode]['amount'];
          }else {
            this.listBarcodes.push(product.barcode);
            this.receiptProducts[this.barcode] = {
              name : product.name,
              cost : product.cost,
              amount : 1,
              vatclass : product.vatClass,
              total : product.cost
            }
          }
          this.subtotal = this.subtotal + this.receiptProducts[product.barcode]['cost'];
          this.tax = this.tax + this.receiptProducts[product.barcode]['cost']*this.receiptProducts[product.barcode]['vatclass']/100;
          console.log(this.receiptProducts)
        },
        error => {
          console.error('There was an error during the request');
          console.log(error);
        }
      );
  }

}
