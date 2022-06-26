import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { IProduct } from '../models/Product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API_URL = `http://localhost:3000/products/`

  constructor(
    private http: HttpClient
  ) { }

  getProduct(id: any): Observable<IProduct> {
    // return data.find(item => item.id === id);
    return this.http.get<IProduct>(`${this.API_URL}/${id}`);
  }
  getProductList(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.API_URL}`);
  }
  removeProduct(id: number): Observable<IProduct> {
    return this.http.delete<IProduct>(`${this.API_URL}/${id}`);
  }
  addProduct(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(`${this.API_URL}`, product);
  }
  updateProduct(product: IProduct): Observable<IProduct> {
    return this.http.put<IProduct>(`${this.API_URL}/${product.id}`, product);
  }
}

// B1: Khai báo HttpClientModule trong app.module.ts
// B2: Khai báo HttpClient trong services
// B3: Inject services HttpClient
