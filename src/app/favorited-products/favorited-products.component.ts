import { Component } from '@angular/core';
import { Product } from '../modules/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-favorited-products',
  templateUrl: './favorited-products.component.html',
  styleUrls: ['./favorited-products.component.scss'],
})
export class FavoritedProductsComponent {
  favourites: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.favourites = this.productService.favourites;
  }
}
