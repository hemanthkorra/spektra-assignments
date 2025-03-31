import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products = [
    { id: 1, name: 'Laptop', price: 1000, description: 'High performance laptop', imageUrl: 'https://th.bing.com/th/id/OIP.AF4lsXmb7hMZ2NqGelbh7wAAAA?rs=1&pid=ImgDetMain' },
    { id: 2, name: 'Smartphone', price: 500, description: 'Latest model smartphone', imageUrl: 'https://m.media-amazon.com/images/I/61rIWBU+7qL._AC_SL1500_.jpg' }
  ];

  getProducts() {
    return this.products;  // Directly return array
  }

  getProductById(id: number) {
    console.log("Searching for product with ID:", id);
    return this.products.find(product => product.id === id);
  }
  

  addProduct(product: any) {
    const newProduct = { ...product, id: this.products.length + 1 };
    console.log(newProduct.id);
    this.products.push(newProduct);
    console.log(this.products)
  }
}
