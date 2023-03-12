import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  listProducts: Product[] = [];

  constructor(private productService: ProductService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(data => {
      this.listProducts = data
    }, error => {
      console.log(error);
    });
  }

  deleteProduct(id: any) {
    this.productService.deleteProduct(id).subscribe(data => {
      this.toastr.error("The product was deleted successfully", "Product deleted");
      this.getProducts();
    }, error => {console.log(error);});
  }
}
