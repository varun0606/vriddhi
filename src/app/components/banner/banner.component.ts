import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  images = [
    'assets/jewlrey.jpg',
    'assets/car2.jpg',
    'assets/car3.jpg',
    'assets/car4.jpg',
    'assets/car5.jpg',
   
  ];
}
