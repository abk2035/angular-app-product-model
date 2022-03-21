import { Action } from "@ngrx/store";
import { Product } from "../model/product.model";

 export enum ProductsActionsTypes{
	 // get All products
     GET_ALL_PRODUCTS="[Products] Get All Products",
     GET_ALL_PRODUCTS_SUCCESS="[Products] Get All Products Success",
     GET_ALL_PRODUCTS_ERROR="[Products] Get All Products Error",
     
     // get selected products
     GET_SELECTED_PRODUCTS="[Products] Get Selected Products",
     GET_SELECTED_PRODUCTS_SUCCESS="[Products] Get Selected Products Success",
     GET_SELECTED_PRODUCTS_ERROR="[Products] Get Selected Products Error",

}

//get all product action
export class GetAllProductsAction implements Action{
	type: ProductsActionsTypes = ProductsActionsTypes.GET_ALL_PRODUCTS;
	 constructor(public payload:any){}
}

export class GetAllProductsActionSuccess implements Action{
	type: ProductsActionsTypes = ProductsActionsTypes.GET_ALL_PRODUCTS_SUCCESS;
	 constructor(public payload:Product[]){}
}

export class GetAllProductsActionError implements Action{
	type: ProductsActionsTypes = ProductsActionsTypes.GET_ALL_PRODUCTS_ERROR;
	 constructor(public payload: string){}
}




//get selected product action
export class GetSelectedProductsAction implements Action{
	type: ProductsActionsTypes = ProductsActionsTypes.GET_SELECTED_PRODUCTS;
	 constructor(public payload:any){}
}

export class GetSelectedProductsActionSuccess implements Action{
	type: ProductsActionsTypes = ProductsActionsTypes.GET_SELECTED_PRODUCTS_SUCCESS;
	 constructor(public payload:Product[]){}
}

export class GetSelectedProductsActionError implements Action{
	type: ProductsActionsTypes = ProductsActionsTypes.GET_SELECTED_PRODUCTS_ERROR;
	 constructor(public payload: string){}
}

export type ProductsAction = GetAllProductsAction |GetAllProductsActionSuccess | GetAllProductsActionError 
                             |GetSelectedProductsAction |GetSelectedProductsActionError|GetSelectedProductsActionSuccess ;
