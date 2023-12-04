import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../modules/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  allProducts!: Product[];
  cart: Product[] = [];
  favourites: Product[] = [];
  addButton: string = 'Add To Cart';
  favouriteButton: string = 'Aggiungi ai Preferiti';

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getAllProducts().subscribe((res) => {
      this.allProducts = res.products;
      console.log(res);
    });
  }

  addToCart(product: Product) {
    if (this.cart.includes(product)) {
      this.cart = this.cart.filter((prod) => prod !== product);
    } else {
      this.cart.push(product);
      this.addButton = 'Rimuovi dal Carrello';
    }
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
