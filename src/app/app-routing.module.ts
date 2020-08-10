import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './components/products/products.component';
import { ReceiptComponent } from './components/receipt/receipt.component';
import {NgModule} from '@angular/core';
import {AuthComponent} from './components/auth/auth.component';
import {AuthGuard} from './guard/auth.guard';

const routes: Routes = [
  {path:"products", component:ProductsComponent, canActivate: [AuthGuard]},
  {path:"login", component:AuthComponent},
  {path:"", component:ReceiptComponent, canActivate: [AuthGuard]},
  { path: '**', component: ReceiptComponent, canActivate: [AuthGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
