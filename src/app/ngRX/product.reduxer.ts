import { Action } from "@ngrx/store";
import { Product } from "../model/product.model";
import { ProductsAction, ProductsActionsTypes } from "./product.action";

export enum ProductStateEnum{
	LOADING = "Loading" ,
	LOADER = "Loader",
	ERROR="Error",
	INITIAL="Initial"
}

export interface ProductsState {
	products : Product[],
	errorMessage :string,
	dataState : ProductStateEnum 
	
}

const initState ={
	products : [],
	errorMessage : "",
	dataState : ProductStateEnum.INITIAL
}

export function productsReducer(state:ProductsState = initState, action:Action) : ProductsState{
	switch(action.type){
		case ProductsActionsTypes.GET_ALL_PRODUCTS:
		 return {...state,dataState:ProductStateEnum.LOADING};
		case ProductsActionsTypes.GET_ALL_PRODUCTS_SUCCESS:
		 return {...state,dataState:ProductStateEnum.LOADER,products:(<ProductsAction> action).payload};
		case ProductsActionsTypes.GET_ALL_PRODUCTS_ERROR:
		 return {...state,dataState:ProductStateEnum.ERROR,errorMessage:(<ProductsAction> action).payload}
		 // get selected products
		 
		 case ProductsActionsTypes.GET_SELECTED_PRODUCTS:
		 return {...state,dataState:ProductStateEnum.LOADING};
		case ProductsActionsTypes.GET_SELECTED_PRODUCTS_SUCCESS:
		 return {...state,dataState:ProductStateEnum.LOADER,products:(<ProductsAction> action).payload};
		case ProductsActionsTypes.GET_SELECTED_PRODUCTS_ERROR:
		 return {...state,dataState:ProductStateEnum.ERROR,errorMessage:(<ProductsAction> action).payload}
		default : return {...state}
	}
	
}