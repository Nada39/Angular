import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { HttpClient } from '@angular/common/http';
import { APIProductResponse } from '../../models/api-product-response';
import { ProductService } from '../../service/ProductService';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  
  categories:string[]=[];
  products:Product[]=[];
  filteredProducts:Product[]=[];
  
  constructor(private _productService:ProductService){}
  
  ngOnInit(): void {

    
    // get all products
   this._productService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
        this.filteredProducts = data; 
        console.log("Fetched Products:", this.products);
      },
      error: (err) => {
        console.error("Error fetching products:", err);
      }
    });

    // get all categories
    this._productService.getCategories().subscribe({
      next: (data) => {
        this.categories = ["All Categories", ...data.map(category => category.name)];
        console.log("Fetched Categories:", this.categories);
      },
      error: (err) => {
        console.error("Error fetching categories:", err);
      }
    });

  }

//   products = [
//   {
//     id: 1,
//     title: 'Confidante Vase',
//     category: 'Vase',
//     price: 150,
//     stock: 12,
//     image: 'image/product1.jpg'
//   },
//   {
//     id: 2,
//     title: 'Darling Vase',
//     category: 'Vase',
//     price: 200,
//     stock: 8,
//     image: 'image/product2.jpg'
//   },
//   {
//     id: 3,
//     title: 'Noir Whisper',
//     category: 'Vase',
//     price: 250,
//     stock: 5,
//     image: 'image/product3.jpg'
//   },
//   {
//     id: 4,
//     title: 'Cutton fluff Vase',
//     category: 'Vase',
//     price: 180,
//     stock: 15,
//     image: 'image/product4.jpg'
//   },
 
//     {
//     id: 5,
//     title: 'Eternal Khaki',
//     category: 'Vase',
//     price: 100,
//     stock: 3,
//     image: 'image/product5.jpg'
//   },
 
// ];



  // Form filter values
  selectedCategory = '';
  titleSearch = '';
  minPrice: number=0;
  maxPrice: number=0;

  filterProducts():Product[] {
  return this.products.filter(product => {
    return (this.selectedCategory === "All Categories" || product.category.toLowerCase() === this.selectedCategory.toLowerCase()) &&
           (this.titleSearch === "" || product.title.toLowerCase().includes(this.titleSearch.toLowerCase())) &&
           (this.minPrice === 0 || product.price >= this.minPrice) &&
           (this.maxPrice === 0 || product.price <= this.maxPrice);
  });
}


  applyFilter()
  { 
      this.filteredProducts = this.filterProducts();
  }

}
