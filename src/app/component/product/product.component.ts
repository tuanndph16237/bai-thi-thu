
import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../../models/Product';
import { ProductService } from '../../services/product.service'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products!: IProduct[]
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList(){
    this.productService.getProductList().subscribe(data =>{
      this.products = data;
    })
  }
  onHandleRemove(id: number) {
    this.productService.removeProduct(id).subscribe(() => {
      this.products = this.products.filter(item => item.id !== id);
    })
  }
}
