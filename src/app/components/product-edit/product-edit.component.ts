import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { ProductsService } from 'src/app/services/products.service';




@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
    productId: number ;
    submitted : boolean =false;
    productFormGroup:FormGroup =this.fb.group({});
    
  constructor(private activatedRoute: ActivatedRoute,
              private productsService: ProductsService,
              private fb:FormBuilder,
              private router:Router) { 
	                                    this.productId=activatedRoute.snapshot.params['id'];
                                      }

  ngOnInit(): void {
	this.productsService.getProduct(this.productId)
	                    .subscribe( product =>{
		                 this.productFormGroup=this.fb.group({
			                            id:[product.id,Validators.required],
			                            name:[product.name,Validators.required],
										price:[product.price,Validators.required],
										quantity:[product.quantity,Validators.required],
										selected:[product.selected,Validators.required],
										available:[product.available,Validators.required]})
		})
	
	
  }
  onUpdateProduct(){
	    this.submitted=true
	    if(this.productFormGroup.invalid) return;
		this.productsService.updateProduct( this.productFormGroup.value)
		                    .subscribe(data => {
			                       alert("Success Product updated");
			                       this.router.navigateByUrl("/products")});
	}

}
