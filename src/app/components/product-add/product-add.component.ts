import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewProductsAction, SaveProductsAction } from 'src/app/ngRX/product.action';
import { ProductsState, ProductStateEnum } from 'src/app/ngRX/product.reduxer';
import { ProductsService } from 'src/app/services/products.service';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
	 productFormGroup: FormGroup = this.fb.group({}) ;
	 submitted:boolean =false ;
     
     state : ProductsState |null=null;
     readonly ProductsStateEnum= ProductStateEnum ;
     
  constructor(private fb:FormBuilder, private productsService:ProductsService, private store:Store<any>) { }

    

  ngOnInit(): void {
	
	this.store.dispatch(new NewProductsAction({}));
	this.store.subscribe((state)=>{
		this.state=state.catalogState;
		if(this.state?.dataState== ProductStateEnum.NEW){
			this.productFormGroup=this.fb.group({
			name:["",Validators.required],
			price:[0,Validators.required],
			quantity:[0,Validators.required],
			selected:[true,Validators.required],
			available:[true,Validators.required]
			
		
	     })
	   }
	})
	
	/*
	this.productFormGroup=this.fb.group({
		name:["",Validators.required],
		price:[0,Validators.required],
		quantity:[0,Validators.required],
		selected:[true,Validators.required],
		available:[true,Validators.required]
		
	})*/
  }
  
  onSaveProduct(){
	this.submitted=true;
	this.store.dispatch(new SaveProductsAction(this.productFormGroup.value));
	/*if(this.productFormGroup.invalid) return ;
	this.productsService.save(this.productFormGroup.value).subscribe(data=>{
		alert("success saving Product !!");
	});*/
}

onNewProduct(){
	this.store.dispatch(new NewProductsAction({}));
}

}
