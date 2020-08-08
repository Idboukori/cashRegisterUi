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

  products: Product[] = [];

  receipt: Receipt;

  barcode: string;

  receiptCreation : boolean = false;

  constructor(private productService: ProductsService,private receiptService : ReceiptService) { }

  ngOnInit(): void {
  }

  getProduct() {
    this.productService.getOne(this.barcode)
      .subscribe(products => this.products = products['hydra:member']);
  }


  createReceipt(){
    this.receiptService.create()
      .subscribe((receipt) => {
        this.receipt = receipt;
        this.receiptCreation = true;
      });
  }

  addProductToReceipt(product){
  console.log(product)
    this.receiptService.addProduct(this.receipt.id,product)
      .subscribe(() => {

      });
  }

}
