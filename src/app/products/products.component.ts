import { Component,OnInit } from '@angular/core';
import { Dessert } from '../core/services/products.service';
import { ProductsService } from '../core/services/products.service';
import { forkJoin, timeInterval } from 'rxjs';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  desserts:Dessert[]=[];
  constructor(private productsService:ProductsService){}
  
  ngOnInit(): void {
      this.getDessertData()
  }
  getDessertData():void{
    let i:number=0;
    for(i; i<=8; i++){
      this.productsService.fetchDesserts(i).subscribe({
        next:(response)=>{
          this.desserts.push(response)
          },
        error:(err)=>{
          console.log("error fetching products", err)
        },
        complete:()=>{
          console.log("dessert fetching complete")
        }
      })
    }
   console.log(this.desserts)
  }

}
