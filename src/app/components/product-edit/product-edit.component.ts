import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { EditProductsAction,UpdateProductsAction, UpdateProductsActionSuccess } from 'src/app/ngRX/product.action';
import { ProductsState, ProductStateEnum } from 'src/app/ngRX/product.reduxer';
import { ProductsService } from 'src/app/services/products.service';




@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
    productId: number ;
    submitted : boolean =false;
    formBuilt : boolean = false;
    state : ProductsState |null=null ;
    readonly ProductsStateEnum= ProductStateEnum  ;
    productFormGroup:FormGroup =this.fb.group({});
    
  constructor(private activatedRoute: ActivatedRoute,
              private productsService: ProductsService,
              private fb:FormBuilder,
              private router:Router,
              private store: Store<any>) { 
	                                    this.productId=activatedRoute.snapshot.params['id'];
                                      }

  ngOnInit(): void {
	this.store.dispatch(new EditProductsAction(this.productId))
	this.store.subscribe((state)=>{
		this.state= state.catalogState;
		if (this.state?.dataState== ProductStateEnum.LOADER){
			if(this.state.currentProduct !=null){
				  		this.productFormGroup=this.fb.group({
			                            id:[this.state.currentProduct.id,Validators.required],
			                            name:[this.state.currentProduct.name,Validators.required],
										price:[this.state.currentProduct.price,Validators.required],
										quantity:[this.state.currentProduct.quantity,Validators.required],
										selected:[this.state.currentProduct.selected,Validators.required],
										available:[this.state.currentProduct.available,Validators.required]})
				this.formBuilt= true ;
			}
		}

	})
	/*this.productsService.getProduct(this.productId)
	                    .subscribe( product =>{
		                 this.productFormGroup=this.fb.group({
			                            id:[product.id,Validators.required],
			                            name:[product.name,Validators.required],
										price:[product.price,Validators.required],
										quantity:[product.quantity,Validators.required],
										selected:[product.selected,Validators.required],
										available:[product.available,Validators.required]})
		})*/
	
	
  }
  onUpdateProduct(){
	    this.submitted=true
	    if(this.productFormGroup.invalid) return;
	    
	    this.store.dispatch(new UpdateProductsAction(this.productFormGroup.value))
		/*this.productsService.updateProduct( this.productFormGroup.value)
		                    .subscribe(data => {
			                       alert("Success Product updated");
			                       this.router.navigateByUrl("/products")});*/
	}
	
	okUpdated(){
		this.router.navigateByUrl("/products");
		
	}

}
