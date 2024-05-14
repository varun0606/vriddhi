import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-quick-recom',
  templateUrl: './quick-recom.component.html',
  styleUrl: './quick-recom.component.css'
})
export class QuickRecomComponent {
  showMore: boolean = false;

  toggleShowMore() {
      this.showMore = !this.showMore;
  }
  product: any; // Define a property to hold the product object

  constructor(private router: Router) { }

  navigateToProductDetail(product: any): void {
    // Navigate to the product detail page and pass the product object as a query parameter
    this.router.navigate(['/product'], { queryParams: { product: product } });
  }
}
