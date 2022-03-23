import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { catchError, map, mergeMap, Observable, of } from "rxjs";
import { ProductsService } from "../services/products.service";
import { GetAllProductsActionError, GetAllProductsActionSuccess, GetSelectedProductsActionError, GetSelectedProductsActionSuccess, ProductsActionsTypes,ProductsAction, SelectProductsActionSuccess, SelectProductsActionError, DeleteProductsActionSuccess, DeleteProductsActionError, NewProductsAction, SaveProductsActionSuccess, SaveProductsActionError } from "./product.action";


@Injectable()
 export class ProductsEffets {
	
	constructor(private productsService:ProductsService,private effectActions :Actions){}
     	
     getAllProductsEffect:Observable<ProductsAction> = createEffect(
	
	    ()=>this.effectActions.pipe(
		     ofType(ProductsActionsTypes.GET_ALL_PRODUCTS),
		     mergeMap((action)=>{
			  return this.productsService.getAllProducts()
			            .pipe(
				              map((products)=> new GetAllProductsActionSuccess(products)),
				              catchError((err)=>of(new GetAllProductsActionError(err.message)))
				              
			                       )
		                      })
		           )
		   	
	);
	
	
	// get Selected Products effect
	  getSelectedProductsEffect:Observable<Action> = createEffect(
	
	    ()=>this.effectActions.pipe(
		     ofType(ProductsActionsTypes.GET_SELECTED_PRODUCTS),
		     mergeMap((action)=>{
			  return this.productsService.getSelectedProducts()
			            .pipe(
				              map((products)=> new GetSelectedProductsActionSuccess(products)),
				              catchError((err)=>of(new GetSelectedProductsActionError(err.message)))
				              
			                       )
		                      })
		           )
		   	
	);
	
		// get Selected Products effect
	  searchProductsEffect:Observable<ProductsAction> = createEffect(
	
	    ()=>this.effectActions.pipe(
		     ofType(ProductsActionsTypes.SEARCH_PRODUCTS),
		     mergeMap((action:ProductsAction)=>{
			  return this.productsService.searchProducts(action.payload)
			            .pipe(
				              map((products)=> new GetSelectedProductsActionSuccess(products)),
				              catchError((err)=>of(new GetSelectedProductsActionError(err.message)))
				              
			                       )
		                      })
		           )
		   	
	);
	
	//  Select Products effect
	  SelectProductsEffect:Observable<ProductsAction> = createEffect(
	
	    ()=>this.effectActions.pipe(
		     ofType(ProductsActionsTypes.SELECT_PRODUCTS),
		     mergeMap((action : ProductsAction)=>{
			  return this.productsService.select(action.payload)
			            .pipe(
				              map((product)=> new SelectProductsActionSuccess(product)),
				              catchError((err)=>of(new SelectProductsActionError(err.message)))
				              
			                       )
		                      })
		           )
		   	
	);
	
		//  delete Products effect
	  DeleteProductsEffect:Observable<ProductsAction> = createEffect(
	
	    ()=>this.effectActions.pipe(
		     ofType(ProductsActionsTypes.DELETE_PRODUCTS),
		     mergeMap((action : ProductsAction)=>{
			  return this.productsService.deleteProduct(action.payload)
			            .pipe(
				              map(()=> new DeleteProductsActionSuccess(action.payload)),
				              catchError((err)=>of(new DeleteProductsActionError(err.message)))
				              
			                       )
		                      })
		           )	   	
	);

		//  new Products effect
	  NewProductsEffect:Observable<ProductsAction> = createEffect(
	
	    ()=>this.effectActions.pipe(
		     ofType(ProductsActionsTypes.NEW_PRODUCTS),
		     map(()=>{
			  return  new NewProductsAction({});
			     })
		           )
	);
	
	    //  save Products effect
	  SaveProductsEffect:Observable<ProductsAction> = createEffect(
	
	    ()=>this.effectActions.pipe(
		     ofType(ProductsActionsTypes.SAVE_PRODUCTS),
		     mergeMap((action : ProductsAction)=>{
			  return this.productsService.save(action.payload)
			            .pipe(
				              map((product)=> new SaveProductsActionSuccess(product)),
				              catchError((err)=>of(new SaveProductsActionError(err.message)))
			                       )
		                      })
		           )	   	
	);
	
}