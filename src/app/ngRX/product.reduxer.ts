import { Action } from "@ngrx/store";
import { Product } from "../model/product.model";
import { ProductsAction, ProductsActionsTypes } from "./product.action";

export enum ProductStateEnum{
	LOADING = "Loading" ,
	LOADER = "Loader",
	ERROR="Error",
	INITIAL="Initial",
	NEW = "New"
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
		// get all products
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
		
		//search products
		case ProductsActionsTypes.SEARCH_PRODUCTS:
		 return {...state,dataState:ProductStateEnum.LOADING};
		case ProductsActionsTypes.SEARCH_PRODUCTS_SUCCESS:
		 return {...state,dataState:ProductStateEnum.LOADER,products:(<ProductsAction> action).payload};
		case ProductsActionsTypes.SEARCH_PRODUCTS_ERROR:
		 return {...state,dataState:ProductStateEnum.ERROR,errorMessage:(<ProductsAction> action).payload}
		 
		  //  selecte product
		 case ProductsActionsTypes.SELECT_PRODUCTS:
		  return {...state,dataState:ProductStateEnum.LOADING};
		 case ProductsActionsTypes.SELECT_PRODUCTS_SUCCESS:
		   let product : Product = (<ProductsAction> action).payload ;
		   let data =state.products.map(p=>(p.id==product.id )? product:p)
		  return {...state,dataState:ProductStateEnum.LOADER,products:data};
		 case ProductsActionsTypes.SELECT_PRODUCTS_ERROR:
		  return {...state,dataState:ProductStateEnum.ERROR,errorMessage:(<ProductsAction> action).payload}
		 
		   // delete product
		 case ProductsActionsTypes.DELETE_PRODUCTS:
		  return {...state,dataState:ProductStateEnum.LOADING};
		 case ProductsActionsTypes.DELETE_PRODUCTS_SUCCESS:
		   let p : Product = (<ProductsAction> action).payload ;
		   let indexe= state.products.indexOf(p)
		   let list =[...state.products]
		   list.splice(indexe,1);
		  return {...state,dataState:ProductStateEnum.LOADER,products:list};
		 case ProductsActionsTypes.DELETE_PRODUCTS_ERROR:
		  return {...state,dataState:ProductStateEnum.ERROR,errorMessage:(<ProductsAction> action).payload}
		  
		  // new product
		  
		   case ProductsActionsTypes.NEW_PRODUCTS:
		      return {...state,dataState:ProductStateEnum.LOADING};
		   case ProductsActionsTypes.NEW_PRODUCTS_SUCCESS:
		      return {...state,dataState:ProductStateEnum.NEW};
		   case ProductsActionsTypes.NEW_PRODUCTS_ERROR:
		      return {...state,dataState:ProductStateEnum.ERROR,errorMessage:(<ProductsAction> action).payload}
		      
		    case ProductsActionsTypes.SAVE_PRODUCTS:
		      return {...state,dataState:ProductStateEnum.LOADING};
		    case ProductsActionsTypes.SAVE_PRODUCTS_SUCCESS:
		      let prods = [...state.products];
		          prods.push((<ProductsAction> action).payload)
		      return {...state,dataState:ProductStateEnum.LOADER,products:prods};
		    case ProductsActionsTypes.DELETE_PRODUCTS_ERROR:
		      return {...state,dataState:ProductStateEnum.ERROR,errorMessage:(<ProductsAction> action).payload}
		  default : return {...state}
	}
	
}