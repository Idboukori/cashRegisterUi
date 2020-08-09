import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../services/products.service';
import {Product} from '../../models/product';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  product: Product = {
    barcode: '',
    name: '',
    cost: null,
    vatClass: null
  };
  products: Product[] = [];

  constructor(private productService: ProductsService, private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    if (localStorage.jwt === undefined) {
      this.router.navigate(['login']);
    }
    this.getProducts();
  }

  getProducts() {
    this.productService.findAll()
      .subscribe(products => this.products = products['hydra:member']);

  }

  deleteProduct(id) {
    this.productService.delete(id)
      .subscribe(() => {
        this.products = this.products.filter(product => product.id != id);
      } );

  }

  addProduct() {
    console.log(this.product)
    this.productService.add(this.product)
      .subscribe((product) => {
        this.products = [product, ...this.products];
        this.resetProduct();
      });
  }

  resetProduct() {
    this.product = {
      barcode: '',
      name: '',
      cost: null,
      vatClass: null
    };
  }
}
