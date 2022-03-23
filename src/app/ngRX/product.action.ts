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
     
      // search products
     SEARCH_PRODUCTS="[Products] Search Products",
     SEARCH_PRODUCTS_SUCCESS="[Products] Search Products Success",
     SEARCH_PRODUCTS_ERROR="[Products] Search Products Error",
     
     // select products
     SELECT_PRODUCTS="[Products] Select Products",
     SELECT_PRODUCTS_SUCCESS="[Products] Select Products Success",
     SELECT_PRODUCTS_ERROR="[Products] Select Products Error",
     
     //delete product
     DELETE_PRODUCTS="[Products] Delete Products",
     DELETE_PRODUCTS_SUCCESS="[Products] Delete Products Success",
     DELETE_PRODUCTS_ERROR="[Products] Delete Products Error",
     
     // new product
     NEW_PRODUCTS="[Products] New Products",
     NEW_PRODUCTS_SUCCESS="[Products] New Products Success",
     NEW_PRODUCTS_ERROR="[Products] New Products Error",
     
      //save product
     SAVE_PRODUCTS="[Products] Save Products",
     SAVE_PRODUCTS_SUCCESS="[Products] Save Products Success",
     SAVE_PRODUCTS_ERROR="[Products] Save Products Error",

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

//search product action 
export class SearchProductsAction implements Action{
	type: ProductsActionsTypes = ProductsActionsTypes.SEARCH_PRODUCTS;
	 constructor(public payload:string){}
}

export class SearchProductsActionSuccess implements Action{
	type: ProductsActionsTypes = ProductsActionsTypes.SEARCH_PRODUCTS_SUCCESS;
	 constructor(public payload:Product[]){}
}

export class SearchProductsActionError implements Action{
	type: ProductsActionsTypes = ProductsActionsTypes.SEARCH_PRODUCTS_ERROR;
	 constructor(public payload: string){}
}

//select product action 
export class SelectProductsAction implements Action{
	type: ProductsActionsTypes = ProductsActionsTypes.SELECT_PRODUCTS;
	 constructor(public payload:Product){}
}

export class SelectProductsActionSuccess implements Action{
	type: ProductsActionsTypes = ProductsActionsTypes.SELECT_PRODUCTS_SUCCESS;
	 constructor(public payload:Product){}
}

export class SelectProductsActionError implements Action{
	type: ProductsActionsTypes = ProductsActionsTypes.SELECT_PRODUCTS_ERROR;
	 constructor(public payload: string){}
}

//delete product action 
export class DeleteProductsAction implements Action{
	type: ProductsActionsTypes = ProductsActionsTypes.DELETE_PRODUCTS;
	 constructor(public payload:Product){}
}

export class DeleteProductsActionSuccess  implements Action{
	type: ProductsActionsTypes = ProductsActionsTypes.DELETE_PRODUCTS_SUCCESS;
	 constructor(public payload:Product){}
}

export class DeleteProductsActionError implements Action{
	type: ProductsActionsTypes = ProductsActionsTypes.DELETE_PRODUCTS_ERROR;
	 constructor(public payload: string){}
}


// new product action 
export class NewProductsAction implements Action{
	type: ProductsActionsTypes = ProductsActionsTypes.NEW_PRODUCTS;
	 constructor(public payload:any){}
}

export class NewProductsActionSuccess implements Action{
	type: ProductsActionsTypes = ProductsActionsTypes.NEW_PRODUCTS_SUCCESS;
	 constructor(public payload:any){}
}

export class NewProductsActionError implements Action{
	type: ProductsActionsTypes = ProductsActionsTypes.NEW_PRODUCTS_ERROR;
	 constructor(public payload: string){}
}


//save product action 
export class SaveProductsAction implements Action{
	type: ProductsActionsTypes = ProductsActionsTypes.SAVE_PRODUCTS;
	 constructor(public payload:Product){}
}

export class SaveProductsActionSuccess  implements Action{
	type: ProductsActionsTypes = ProductsActionsTypes.SAVE_PRODUCTS_SUCCESS;
	 constructor(public payload:Product){}
}

export class SaveProductsActionError implements Action{
	type: ProductsActionsTypes = ProductsActionsTypes.SAVE_PRODUCTS_ERROR;
	 constructor(public payload: string){}
}
export type ProductsAction = GetAllProductsAction |GetAllProductsActionSuccess | GetAllProductsActionError 
                             |GetSelectedProductsAction |GetSelectedProductsActionError|GetSelectedProductsActionSuccess 
                             |SearchProductsAction |SearchProductsActionError |SearchProductsActionSuccess
                             |SelectProductsAction |SelectProductsActionError | SelectProductsActionSuccess 
                             |DeleteProductsAction |DeleteProductsActionError | DeleteProductsActionSuccess 
                             |NewProductsAction |NewProductsActionSuccess |NewProductsActionError ;
