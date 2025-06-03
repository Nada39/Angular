import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products = [
  {
    id: 1,
    title: 'Confidante Vase',
    category: 'Vase',
    price: 150,
    stock: 12,
    image: 'image/product1.jpg'
  },
  {
    id: 2,
    title: 'Darling Vase',
    category: 'Vase',
    price: 200,
    stock: 8,
    image: 'image/product2.jpg'
  },
  {
    id: 3,
    title: 'Noir Whisper',
    category: 'Vase',
    price: 250,
    stock: 5,
    image: 'image/product3.jpg'
  },
  {
    id: 4,
    title: 'Cutton fluff Vase',
    category: 'Vase',
    price: 180,
    stock: 15,
    image: 'image/product4.jpg'
  },
 
    {
    id: 5,
    title: 'Eternal Khaki',
    category: 'Vase',
    price: 100,
    stock: 3,
    image: 'image/product5.jpg'
  },
 
];


  // Form filter values
  selectedCategory = 'All';
  titleSearch = '';
  maxPrice: number | null = null;
}
