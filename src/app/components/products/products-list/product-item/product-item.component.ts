import { Component,   EventEmitter,  Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/model/product.model';
import { DeleteProductsAction, EditProductsAction, SelectProductsAction } from 'src/app/ngRX/product.action';
import { ActionEvent, ProductActionsTypes } from 'src/app/states/products.state';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product : Product | null=null;
//  @Output() eventEmitter: EventEmitter<ActionEvent> =new EventEmitter<ActionEvent>()
  
  constructor( private store:Store,private router:Router) { }

  ngOnInit(): void {
  }
  
    onSelect(p:Product){
	 this.store.dispatch(new SelectProductsAction(p))
	/*this.eventEmitter.emit(
		{type:ProductActionsTypes.SELECT_PRODUCT,
		 payload:p
		})*/
}
  onDelete(p:Product){
	this.store.dispatch(new DeleteProductsAction(p))
	/*this.eventEmitter.emit(
		{type:ProductActionsTypes.DELETE_PRODUCT,
		payload:p
		})*/
}

 onEdit(p:Product){
	/*this.eventEmitter.emit(
		{type:ProductActionsTypes.EDIT_PRODUCT,
		 payload:p
		})*/
  this.router.navigateByUrl("/editProduct/"+p.id);
	
}

}
