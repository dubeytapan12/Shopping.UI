import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product/product.service';
import { ProductResponse } from '../product/admin-product';

@Component({
  selector: 'app-add-update-product',
  templateUrl: './add-update-product.component.html',
  styleUrls: ['./add-update-product.component.css']
})
export class AddUpdateProductComponent implements OnInit {
  productMessage: undefined | string;
  product: ProductResponse = new ProductResponse();
  productId: number=0;
  file: File = {} as File;
  constructor(private route: ActivatedRoute, private productService: ProductService) {}
 // On file Select
 onChange(event:any) {
  this.file = event.target.files[0];
}
  ngOnInit(): void {
    this.productId =  +(this.route.snapshot.paramMap.get('id') || 0);

    console.warn(this.productId);
    this.productService.getProductById(this.productId).subscribe({
      next: item=> {
       this.product = item.product;
       this.product.id= this.productId;
      }
    })
  }
  submit(formValue: any) {
    // Call the ProductService to update the product
    this.productService.updateProduct(this.productId,formValue,this.file).subscribe(
      product => {
        this.productMessage = 'Product updated successfully.';
      },
      error => console.error(error)
    );
  }

}
