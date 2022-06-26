import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAddComponent } from './component/product-add/product-add.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { ProductComponent } from './component/product/product.component';
import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "product", component: ProductComponent },
  { path: "product/add", component: ProductAddComponent },
  { path: "product/:id", component: ProductDetailComponent },
  { path: "product/edit/:id", component: ProductAddComponent },
  {
    path : '',
    component: HeaderComponent
  },
  {
    path : '',
    component: FooterComponent
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

