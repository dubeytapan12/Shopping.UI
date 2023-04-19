import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/admin-dashboard/product/product.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.css']
})
export class UserCartComponent implements OnInit {

 cartData: any[]=[];
  constructor(private route: ActivatedRoute,private product:ProductService, private user:UserService) {}

  ngOnInit(): void {
    this.product.getProductsForCart().subscribe(item=> this.cartData=item);
  }
  removeToCart(cartId:number|undefined,qty:number|undefined){
    cartId &&  this.product.deleteProductcart(cartId)
    .subscribe( {
      next: item=> {
      this.user.cartItems.next(-Math.abs(qty ?? 0));
      this.product.getProductsForCart().subscribe(item=> this.cartData=item);
      },
      error: item=> {
        debugger;
        alert(item);
      }
    });
  }

}
