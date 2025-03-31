import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'crud-app';
  products: any = [];
  editing: boolean = false;
  productForm: any = { id: null, name: '', price: '',imageUrl:'' }; // Form data
  private apiUrl = "http://localhost:3000/products"; // JSON Server URL

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getProducts();
  }

  //  Fetch all products
  getProducts() {
    this.http.get(this.apiUrl).subscribe(data => {
      console.log("Fetched Products:", data);
      this.products = data;
    });
  }

  //  Add or Update Product
  onSubmit() {
    if (this.editing) {
      this.updateProduct(this.productForm).subscribe(() => {
        this.getProducts();
        this.cancelEdit();
      });
    } else if(this.productForm.name && this.productForm.price && this.productForm.imageUrl){
      //  Do NOT assign an ID manually; JSON Server will generate it
      const newProduct = { name: this.productForm.name, price: this.productForm.price, imageUrl: this.productForm.imageUrl };

      this.addProduct(newProduct).subscribe(() => {
        this.getProducts();
      });
    }

    this.productForm = { id: null, name: '', price: '',imageUrl:'' };
  }

  //  Add a product (JSON Server assigns the ID)
  addProduct(product: any): Observable<any> {
    return this.http.post(this.apiUrl, product);
  }

  //  Update an existing product
  updateProduct(product: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${product.id}`, product);
  }

  //  Edit product (populate form with existing data)
  editProduct(product: any) {
    this.productForm = { ...product }; // Assign existing product data to form
    this.editing = true;
  }

  //  Cancel editing
  cancelEdit() {
    this.productForm = { id: null, name: '', price: '',imageUrl:'' };
    this.editing = false;
  }

  //  Delete product
  deleteProduct(id: number) {
    console.log(id);
    this.http.delete(`${this.apiUrl}/${id}`).subscribe(() => {
      console.log(`Product with ID ${id} deleted.`);
      this.getProducts(); // Refresh list after deletion
    });
  }
}





































































//$	Used inside template literals to insert dynamic values
// Observables are lazy and wont execute till they are subscribed 
// RxJS (Reactive Extensions for JavaScript) is a powerful library for handling asynchronous and event-driven programming using Observables.