import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetAllProductsAction, GetSelectedProductsAction, NewProductsAction, SearchProductsAction } from 'src/app/ngRX/product.action';
import { ActionEvent, ProductActionsTypes } from 'src/app/states/products.state';

@Component({
  selector: 'app-products-nav-bar',
  templateUrl: './products-nav-bar.component.html',
  styleUrls: ['./products-nav-bar.component.scss']
})
export class ProductsNavBarComponent implements OnInit {
 
 //@Output() productEventEmitter : EventEmitter<ActionEvent> = new EventEmitter<ActionEvent>() ;
  constructor(private store :Store<any> ) { }

  ngOnInit(): void {
  }
  
  onGetAllProducts(){
	this.store.dispatch(new GetAllProductsAction({}))
}
  
  onGetSelectedProducts(){
   this.store.dispatch(new GetSelectedProductsAction({}))	
}
  
  onGetAvailableProducts(){
	//this.productEventEmitter.emit({type:ProductActionsTypes.GET_AVAILABLE_PRODUCTS});
}
  
  onNewProduct(){
		//this.productEventEmitter.emit({type:ProductActionsTypes.NEW_PRODUCT});
		//this.store.dispatch(new NewProductsAction({}));

}
  
  onSearch(dataForm :any){
	//this.productEventEmitter.emit({type:ProductActionsTypes.SEARCH_PRODUCTS,payload:dataForm});
	this.store.dispatch(new SearchProductsAction(dataForm.keyword));
	
}

}
