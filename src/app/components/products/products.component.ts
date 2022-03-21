import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { catchError, map, of,  startWith } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from 'src/app/model/product.model';
import { ProductsState, ProductStateEnum } from 'src/app/ngRX/product.reduxer';
import { ProductsService } from 'src/app/services/products.service';
import { ActionEvent, AppDataState, DataStateEnum, ProductActionsTypes } from 'src/app/states/products.state';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  
  //products$:Observable<AppDataState<Product[]>>|null=null;
  readonly DataStateEnum = ProductStateEnum;
  productsState$ : Observable<ProductsState> | null = null;
  
  constructor(private store:Store<any>) { }
  

  ngOnInit(): void {
	this.productsState$ =this.store.pipe(
		                   map((state)=>state.catalogState)
	                      )
  }
  
 /* onGetAllProducts(){
	    console.log('debut de GetAllProduct');
	this.products$=
	               this.productsService.getAllProducts()
	                       .pipe(
		                         map(data=>{
			                          console.log("arriver des produits");
			                         return{dataState:DataStateEnum.LOADED , data: data }}),
		                         startWith({dataState:DataStateEnum.LOADING}),
		                         catchError(err =>of({dataState:DataStateEnum.ERROR,errorMessage:err.message}))
	                         ); 
}
   onGetSelectedProducts(){
	this.products$=
	               this.productsService.getSelectedProducts()
	                       .pipe(
		                         map(data=>{
			                          console.log("arriver des produits");
			                         return{dataState:DataStateEnum.LOADED , data: data }}),
		                         startWith({dataState:DataStateEnum.LOADING}),
		                         catchError(err =>of({dataState:DataStateEnum.ERROR,errorMessage:err.message}))
	                         ); 
	
	
   }
   
   onGetAvailableProducts(){
	this.products$=
	               this.productsService.getAvailableProducts()
	                       .pipe(
		                         map(data=>{
			                          console.log("arriver des produits");
			                         return{dataState:DataStateEnum.LOADED , data: data }}),
		                         startWith({dataState:DataStateEnum.LOADING}),
		                         catchError(err =>of({dataState:DataStateEnum.ERROR,errorMessage:err.message}))
	                         ); 
	
}

onSearch(dataForm :any){
	this.products$=
	               this.productsService.searchProducts(dataForm.keyword)
	                       .pipe(
		                         map(data=>{
			                          console.log(data);
			                         return{dataState:DataStateEnum.LOADED , data: data }}
			                         ),
		                         startWith({dataState:DataStateEnum.LOADING}),
		                         catchError(err =>of({dataState:DataStateEnum.ERROR,errorMessage:err.message}))
	                         ); 
	
}

onSelect(p:Product){
	this.productsService.select(p)
	                    .subscribe(data=>{
		                            p.selected=data.selected 
	                             });
}

onDelete(p:Product){
	let v= confirm("voulez-vous vraiment supprimer ce produit?");
	if(v){
	this.productsService.deleteProduct(p)
	                    .subscribe(data=>{
		                             this.onGetAllProducts() });
                                }
                         }
                         
   onNewProduct(){
	this.router.navigateByUrl("/newProduct")
}                      
                         
      onEdit(p:Product){
	this.router.navigateByUrl("/editProduct/"+p.id)
}                       

//send event to parenComponent

onActionEvent($event:ActionEvent){
	switch($event.type){
		//cases of product-nav-bar
		case ProductActionsTypes.GET_ALL_PRODUCTS : this.onGetAllProducts();
		break;
		case ProductActionsTypes.GET_SELECTED_PRODUCTS: this.onGetSelectedProducts();
		break
		case ProductActionsTypes.GET_AVAILABLE_PRODUCTS: this.onGetAvailableProducts();
		break;
		case ProductActionsTypes.SEARCH_PRODUCTS:this.onSearch($event.payload);
		break;
		case ProductActionsTypes.NEW_PRODUCT :this.onNewProduct();
		break;
		//cases of product-list-component
		case ProductActionsTypes.SELECT_PRODUCT :this.onSelect($event.payload);
		break;
		case ProductActionsTypes.DELETE_PRODUCT :this.onDelete($event.payload);
		break;
		case ProductActionsTypes.EDIT_PRODUCT :this.onEdit($event.payload);
		break;
		
	}
}*/

}





