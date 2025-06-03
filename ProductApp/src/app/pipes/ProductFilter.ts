import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productFilter',
  standalone: false
})
export class ProductFilter implements PipeTransform {

  transform(products: any[], selectedCategory: string,titleSearch:string , minPrice:number , maxPrice: number,): any[] {
  if (!products) return [];

    return products.filter(product => {
    return (selectedCategory === "All Categories" || product.category.toLowerCase() === selectedCategory.toLowerCase()) &&
           (titleSearch === "" || product.title.toLowerCase().includes(titleSearch.toLowerCase())) &&
           (minPrice === 0 || product.price >= minPrice) &&
           (maxPrice === 0 || product.price <= maxPrice);
  });
}


}