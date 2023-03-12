import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = "http://localhost:3004/api";

  constructor(private http: HttpClient) {

  }

  getProducts(): Observable<any> {
    return this.http.get(this.url + "/allProducts");
  }

  deleteProduct(id: String): Observable<any> {
    return this.http.delete(this.url + `/product/${id}`);
  }

  saveProduct(product: Product): Observable<any> {
    return this.http.post(this.url + '/newProduct', product);
  }

  getProduct(id: string): Observable<any> {
    return this.http.get(this.url + `/product/${id}`);
  }

  editProduct(id: string, product: Product): Observable<any>{
    return this.http.put(this.url + `/product/${id}`, product);
  }
}
