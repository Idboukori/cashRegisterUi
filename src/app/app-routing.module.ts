import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './components/products/products.component';
import { ReceiptComponent } from './components/receipt/receipt.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {path:"products", component:ProductsComponent},
  {path:"", component:ReceiptComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
