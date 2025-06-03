import { HttpClient } from "@angular/common/http";
import { Product } from "../models/product";
import { APIProductResponse } from "../models/api-product-response";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Category } from "../models/category";


@Injectable({
  providedIn: 'root'
})
export class ProductService
{
        constructor(private _http:HttpClient){}


        // observable to wait http response
        getProducts():Observable<Product[]>
        {
            return this._http.get<APIProductResponse>("https://dummyjson.com/products")
            .pipe(map(resp => resp.products)); 
               
        }

        getCategories():Observable<Category[]>
        {
            return this._http.get<Category[]>("https://dummyjson.com/products/categories"); 
            
        }
}