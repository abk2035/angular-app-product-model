import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { catchError, map, mergeMap, Observable, of } from "rxjs";
import { ProductsService } from "../services/products.service";
import { GetAllProductsActionError, GetAllProductsActionSuccess, GetSelectedProductsActionError, GetSelectedProductsActionSuccess, ProductsActionsTypes } from "./product.action";


@Injectable()
 export class ProductsEffets {
	
	constructor(private productsService:ProductsService,private effectActions :Actions){}
     	
     getAllProductsEffect:Observable<Action> = createEffect(
	
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

	
}