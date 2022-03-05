
//les actions utilises
export enum ProductActionsTypes{
	GET_ALL_PRODUCTS="[Product] Get All products",
	GET_SELECTED_PRODUCTS="[Product] Get Selected products",
	GET_AVAILABLE_PRODUCTS="[Product] Get Available products",
	SEARCH_PRODUCTS="[Product] Search products",
	NEW_PRODUCT="[Product] New product",
    EDIT_PRODUCT="[Product]  Edit One Product",
    DELETE_PRODUCT ="[Product] Delete One Product",
    SELECT_PRODUCT ="[Product] Select One Product"
    
}

//interface des evenements 
export interface ActionEvent{
	type : ProductActionsTypes ;
	payload ? :any;
}

//state utilise pour les pipes
export enum DataStateEnum{
	LOADING,
	LOADED,
	ERROR
	
}

export interface AppDataState<T>{
	dataState?:DataStateEnum;
	data?:T;
	errorMessage?:string;
}