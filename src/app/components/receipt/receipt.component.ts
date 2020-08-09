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

  product: Product[] = [];

  receipt: Receipt;

  receiptProducts : object = {};

  listBarcodes : string[] = []

  barcode: string;

  receiptCreation : boolean = false;

  constructor(private productService: ProductsService,private receiptService : ReceiptService) { }

  ngOnInit(): void {
  }

  getProduct() {
    this.productService.getOne(this.barcode)
      .subscribe(products => this.product = products['hydra:member'],
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
          if(product.barcode in this.receiptProducts){
            this.receiptProducts[product.barcode]['amount']++;
            this.receiptProducts[product.barcode]['total'] = product.cost*this.receiptProducts[product.barcode]['amount'];
          }else {
            this.listBarcodes.push(product.barcode);
            this.receiptProducts[this.barcode] = {
              name : product.name,
              cost : product.cost,
              amount : 1,
              total : product.cost
            }
          }
          console.log(this.receiptProducts)
        },
        error => {
          console.error('There was an error during the request');
          console.log(error);
        }
      );
  }

}
