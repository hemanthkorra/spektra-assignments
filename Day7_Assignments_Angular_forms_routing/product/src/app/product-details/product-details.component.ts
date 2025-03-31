import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  product: any;

  constructor(private route: ActivatedRoute, private productService: ProductService) {}

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    console.log("Product ID from route:", idParam); // Debugging

    if (idParam) {
      const id = Number(idParam);
      this.product = this.productService.getProductById(id);
      console.log("Fetched product:", this.product); // Debugging

      if (!this.product) {
        console.error("Product not found for ID:", id);
      }
    } else {
      console.error("Invalid product ID:", idParam);
    }
  }
}
