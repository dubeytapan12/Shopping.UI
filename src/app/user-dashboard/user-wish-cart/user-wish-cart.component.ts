import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/admin-dashboard/product/product.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-wish-cart',
  templateUrl: './user-wish-cart.component.html',
  styleUrls: ['./user-wish-cart.component.css']
})
export class UserWishCartComponent implements OnInit {

 cartData: any[]=[];
  constructor(private route: ActivatedRoute,private product:ProductService, private user:UserService) {}

  ngOnInit(): void {
    this.product.getProductsForWishList().subscribe(item=> this.cartData=item);
  }
  removeWishList(wishId:number|undefined){
    wishId &&  this.product.deleteProductWishList(wishId)
    .subscribe( {
      next: item=> {
      this.product.getProductsForWishList().subscribe(item=> this.cartData=item);
      },
      error: item=> {
        debugger;
        alert(item);
      }
    });
  }
}
