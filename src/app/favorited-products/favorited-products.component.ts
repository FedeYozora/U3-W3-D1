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
  favouriteButton: string = 'Rimuovi dai Preferiti';

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.favourites = this.productService.favourites;
  }

  addToFavourites(product: Product) {
    if (this.productService.favourites.includes(product)) {
      this.productService.favourites = this.productService.favourites.filter(
        (prod) => prod != product
      );
      this.favourites = this.productService.favourites;
      this.favouriteButton = 'Aggiungi ai Preferiti';
    } else {
      this.productService.favourites.push(product);
      this.favourites = this.productService.favourites;
      this.favouriteButton = 'Rimuovi dai Preferiti';
    }
  }
}
