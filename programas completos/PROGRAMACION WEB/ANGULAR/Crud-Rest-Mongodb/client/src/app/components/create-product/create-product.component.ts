import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  productForm: FormGroup;
  titleForm: string;
  id: string | null;

  constructor(private fb: FormBuilder, private router: Router, private toastr: ToastrService, private productService: ProductService, private activateRoute: ActivatedRoute) {
    this.productForm = this.fb.group({
      product: ["", Validators.required],
      category: ["", Validators.required],
      ubication: ["", Validators.required],
      price: ["", Validators.required]
    });
    this.titleForm = "Crear Producto";
    this.id = activateRoute.snapshot.paramMap.get("id");
  }

  ngOnInit(): void {
    this.isEdit();
  }

  addProduct(): void {
    const PRODUCT: Product = {
      name: this.productForm.get('product')?.value,
      category: this.productForm.get('category')?.value,
      ubication: this.productForm.get('ubication')?.value,
      price: this.productForm.get('price')?.value
    };

    if (this.id != null) {
      this.productService.editProduct(this.id,PRODUCT).subscribe(data =>{
        this.toastr.info('Producto editado satisfactoriamente', 'Producto editado');
        this.router.navigate(['/']);
      }, err => {
        console.log(err)
        this.productForm.reset();
      });
    } else {
      this.productService.saveProduct(PRODUCT).subscribe(data => {
        this.toastr.success('Producto creado satisfactoriamente', 'Producto registrado');
        this.router.navigate(['/']);
      }, err => {
        console.log(err)
        this.productForm.reset();
      });
    }
  }

  isEdit() {
    if (this.id != null) {
      this.titleForm = "Editar Producto";
      this.productService.getProduct(this.id).subscribe(data => {
        this.productForm.setValue({
          product: data.name,
          category: data.category,
          ubication: data.ubication,
          price: data.price

        })
      }, error => { });
    }
  }
}
