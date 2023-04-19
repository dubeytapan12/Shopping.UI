import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AdminProduct, ProductResponse, ShoppingResponse } from './admin-product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly apiUrl = environment.loginUrl;

  constructor(private http: HttpClient) {}

  getProducts(): Observable<ShoppingResponse> {
    return this.http.get<ShoppingResponse>(`${this.apiUrl}/Admin/listProduct`);
  }

  getProductById(id: number): Observable<ShoppingResponse> {
    return this.http.get<ShoppingResponse>(`${this.apiUrl}/Admin/GetProductById/${id}`);
  }

  addProduct(product: AdminProduct): Observable<AdminProduct> {
    return this.http.post<AdminProduct>(`${this.apiUrl}/Product`, product);
  }

  updateProduct(productId: number,product: ProductResponse,file:any): Observable<ProductResponse> {
  //     // Create form data
    
    const formData = new FormData();
    formData.append('formFile', file, file.name);
    formData.append('id',productId.toString());
    formData.append('name', product.name);
    formData.append('price', product.price.toString());
    formData.append('quantity', product.quantity.toString());
    formData.append('image', product.image);
    return this.http.post<ProductResponse>(`${this.apiUrl}/Admin/addUpdateProduct`, formData);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/Admin/Product/${id}`);
  }
  deleteProductWishList(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/User/removeFromWishList/${id}`);
  }
  getProductsForWishList(): Observable<any> {
    var retrievedObject = localStorage.getItem('user-data');
    return this.http.get<any>(`${this.apiUrl}/User/get-wishlist/${JSON.parse(retrievedObject || '{}')?.user?.email}`);
  }
  deleteProductcart(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/User/removeFromCart/${id}`);
  }
  getProductsForCart(): Observable<any> {
    var retrievedObject = localStorage.getItem('user-data');
    return this.http.get<any>(`${this.apiUrl}/User/get-cart/${JSON.parse(retrievedObject || '{}')?.user?.email}`);
  }
  addCartProduct(productId: number): Observable<any> {
    var retrievedObject = localStorage.getItem('user-data');
    
    return this.http.post<any>(`${this.apiUrl}/User/addToCart`, { productID: productId,
      userID: JSON.parse(retrievedObject || '{}')?.user?.id });
  }
  addWishListProduct(productId: number): Observable<any> {
    var retrievedObject = localStorage.getItem('user-data');
    
    return this.http.post<any>(`${this.apiUrl}/User/addToWishlist`, { productID: productId,
      userID: JSON.parse(retrievedObject || '{}')?.user?.id });
  }
}
