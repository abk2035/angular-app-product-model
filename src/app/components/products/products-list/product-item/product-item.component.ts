import { Component,   EventEmitter,  Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { ActionEvent, ProductActionsTypes } from 'src/app/states/products.state';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product : Product | null=null;
  @Output() eventEmitter: EventEmitter<ActionEvent> =new EventEmitter<ActionEvent>()
  
  constructor() { }

  ngOnInit(): void {
  }
  
    onSelect(p:Product){
	this.eventEmitter.emit(
		{type:ProductActionsTypes.SELECT_PRODUCT,
		 payload:p
		})
}
  onDelete(p:Product){
	this.eventEmitter.emit(
		{type:ProductActionsTypes.DELETE_PRODUCT,
		payload:p
		})
}

 onEdit(p:Product){
	this.eventEmitter.emit(
		{type:ProductActionsTypes.EDIT_PRODUCT,
		 payload:p
		})
	
}

}
