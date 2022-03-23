import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product.model';
import { ProductsState, ProductStateEnum } from 'src/app/ngRX/product.reduxer';
import { ActionEvent, AppDataState, DataStateEnum, ProductActionsTypes } from 'src/app/states/products.state';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  @Input() productsInput$:Observable<ProductsState>|null=null;
 // @Output() productEventEmitter : EventEmitter<ActionEvent>=new EventEmitter<ActionEvent>();
  readonly DataStateEnum=ProductStateEnum;
  
  constructor() { }

  ngOnInit(): void {
  }
  

	


/*onAction($event:ActionEvent){
	this.productEventEmitter.emit($event);
}*/

}
