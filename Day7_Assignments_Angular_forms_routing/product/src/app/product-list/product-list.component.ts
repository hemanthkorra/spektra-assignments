import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { FormGroup, ReactiveFormsModule, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  imports: [ReactiveFormsModule],
  // providers: [ProductService],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: any[] = [];
  productForm: FormGroup;

  constructor(private productService: ProductService, private router: Router) {
    this.products = this.productService.getProducts();

    this.productForm = new FormGroup({
      name: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      imageUrl: new FormControl('', Validators.required)
    });
  }

  addProduct() {
    if (this.productForm.valid) {
      this.productService.addProduct(this.productForm.value);
      this.products = this.productService.getProducts();
      this.productForm.reset();
    }
  }

  viewDetails(id: number) {
    this.router.navigate(['/product', id]);
  }
}
