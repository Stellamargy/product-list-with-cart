import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface Dessert {
  image: {
    thumbnail: string; 
    mobile: string;    
    tablet: string;   
    desktop: string;   
  };
  name: string;       
  category: string;    
  price: number;       
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  host:string="http://localhost:3000"
  constructor(private http:HttpClient) { }

  fetchDesserts(id:number):Observable<Dessert>{
    return this.http.get<Dessert>(`${this.host}/${id}`)
  }
}
