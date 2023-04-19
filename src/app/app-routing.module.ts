import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ProductComponent } from './admin-dashboard/product/product.component';
import { LoginComponent } from './login/login.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AddUpdateProductComponent } from './admin-dashboard/add-update-product/add-update-product.component';
import { UserProductComponent } from './user-dashboard/user-product/user-product.component';
import { UserCartComponent } from './user-dashboard/user-cart/user-cart.component';
import { UserWishCartComponent } from './user-dashboard/user-wish-cart/user-wish-cart.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'admin', component: AdminDashboardComponent,
  children: [
    {
      path: "",
      component: ProductComponent
    },
    {
      component:AddUpdateProductComponent,
      path:'add-update-product/:id'
    },
    {
      component:ChangePasswordComponent,
      path:'change-password'
    },     
  ],
},
  { path: 'user', component: UserDashboardComponent, 
  children: [
    {
      path: "",
      component: UserProductComponent
    },
    {
      component:UserCartComponent,
      path:'add-to-cart'
    },
    {
      component:UserWishCartComponent,
      path:'add-to-wish-list'
    },
    {
      component:ChangePasswordComponent,
      path:'change-password'
    },      
  ],

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
