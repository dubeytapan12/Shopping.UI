import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';
import { ProductService } from '../admin-dashboard/product/product.service';
import { BehaviorSubject, Subject, concatAll, map, reduce } from 'rxjs';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  
  constructor(private router: Router, private userService:UserService,private product:ProductService) { }
  cartItems: Subject<number>=new Subject<number>;
  cartNumber: number = 0;
  logout() {
    this.router.navigate(['/']);
    localStorage.removeItem('user-data');
    this.userService.cartItems.next(0);
  }
  getCartNumber() {
    this.userService.cartItems.subscribe({
      next: item=> {     
        debugger;  
        this.cartNumber+=item;
        this.cartItems.next(this.cartNumber);
      }
    });
  }

  ngOnInit(): void {

    this.product.getProductsForCart()
    .pipe(
      map(products => products.map((item: { quantity: number; }) => item.quantity)),
      concatAll(), // flatten the array of numbers
      reduce((acc, curr) => (acc as number) + (curr as number), 0) // type assertion to number for acc
    )
    .subscribe((item: number) => { 
      debugger;
      this.userService.cartItems.next(item ?? 0);
    });
    this.getCartNumber();
  }

}
