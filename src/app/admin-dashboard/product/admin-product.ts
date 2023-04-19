import { LoginInnerResponse } from "src/app/login/login-response";

export class AdminProduct {
     id: number;
     name: string;
     price: number;
     description: string;
     qty: number;
     image:string;
}

export class ShoppingResponse {
     statusCode: number;
     statusMessage: string;
     user: LoginInnerResponse;
     cart: CartResponse;
     product: ProductResponse;
     wishList: WishListResponse;
     userAddress: userAddressResponse;
     listProducts: ProductResponse[];
     listWishList: WishListResponse[];
     listCart: CartResponse[];
     listProduct: ProductResponse[];
}

export class userAddressResponse {
     
}
export class WishListResponse {

}
export class ProductResponse {
     id: number;
     name: string;
     image: string;
     price: number;
     quantity: number;
   }
export class CartResponse {

}