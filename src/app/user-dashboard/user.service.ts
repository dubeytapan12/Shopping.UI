import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  cartItems = new BehaviorSubject<number>(0);
  constructor() { }
}
