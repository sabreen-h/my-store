import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {
  id:any
  data:any={}

  constructor(private route:ActivatedRoute , private service:ProductsService) {
    this.id=this.route.snapshot.paramMap.get("id")
    console.log(this.id)
   }

  ngOnInit(): void {
    this.getProduct()
  }

  getProduct(){
    this.service.getProductsById(this.id).subscribe((res:any) =>{
          this.data=res
    })
  }

}
