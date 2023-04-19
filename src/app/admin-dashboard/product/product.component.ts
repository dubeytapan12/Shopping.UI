import { Component, OnInit } from '@angular/core';
import { AdminProduct, ProductResponse } from './admin-product';
import { ProductService } from './product.service';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productList: ProductResponse[] = [];
  product: ProductResponse = new ProductResponse();
  isAdd: boolean;
  isEdit: boolean;
  errorMsg: string;
  icon = faTrash;
  iconEdit=faEdit;
  productMessage: undefined | string;
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }
  
  getProducts(): void {
    this.productService.getProducts()
      .subscribe(products => this.productList = products.listProduct);
  }

  
  deleteProduct(id: number): void {
    this.productService.deleteProduct(id)
      .subscribe(
        () => {
          this.productMessage = 'Product is deleted';
          this.getProducts();
        },
        error => this.errorMsg = error
      );
  }

}
