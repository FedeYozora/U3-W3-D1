import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product, ProductResponse } from '../modules/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  url!: string;
  favourites: Product[] = [];

  constructor(private http: HttpClient) {
    this.url = 'https://dummyjson.com/products';
  }

  getAllProducts(): Observable<ProductResponse> {
    return this.http.get<ProductResponse>(this.url);
  }
}
