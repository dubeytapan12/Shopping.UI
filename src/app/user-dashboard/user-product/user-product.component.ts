import { Component, OnInit } from '@angular/core';
import { ProductResponse } from 'src/app/admin-dashboard/product/admin-product';
import { ProductService } from 'src/app/admin-dashboard/product/product.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { concatAll, map, reduce } from 'rxjs';

@Component({
  selector: 'app-user-product',
  templateUrl: './user-product.component.html',
  styleUrls: ['./user-product.component.css']
})
export class UserProductComponent implements OnInit {
  filterText: string;
  trendyProducts:ProductResponse[] = [];
  constructor(private product:ProductService,private user:UserService, private router: Router) {}
 
   ngOnInit(): void {
     this.product.getProducts().subscribe((data)=>{
       this.trendyProducts=data.listProduct;
     });
   }
addToWishList(productId:number) {
  this.product.addWishListProduct(productId).subscribe(item=> { 
///user/add-to-wish-list/{{item.id}}
this.router.navigate([`/user/add-to-wish-list`]);
  });
}
   addToCart(productId: number) {
    this.product.addCartProduct(productId).subscribe(item=> {
      this.user.cartItems.next(1); 
      ///user/add-to-cart/{{item.id}}
      this.router.navigate([`/user/add-to-cart`]);
    });
   }
}
