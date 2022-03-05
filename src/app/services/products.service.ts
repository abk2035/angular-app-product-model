import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { environment } from "src/environments/environment";
import { Product } from "../model/product.model";


@Injectable({providedIn:"root"})
export class ProductsService{
   
   
	
constructor (private http: HttpClient){
}
   getAllProducts(): Observable<Product[]>{
	
	let host=(Math.random()>0.1)?environment.host:environment.unreachableHost;
	return this.http.get <Product[]>(host+"/product");
}
   getSelectedProducts(): Observable<Product[]>{
	
	let host=environment.host;
	return this.http.get <Product[]>(host+"/product?selected=true");
}
   getAvailableProducts(): Observable<Product[]>{
	
	let host=environment.host;
	return this.http.get <Product[]>(host+"/product?available=true");
}

   searchProducts(keyword: string): Observable<Product[]> {
        let host=environment.host;
        return this.http.get <Product[]>(host+"/product?name_like="+keyword);
    }
    
     select(product:Product): Observable<Product>{
	
	let host=environment.host;
	product.selected=!product.selected;
	return this.http.put <Product>(host+"/product/"+product.id,product);
}

// delete service
    deleteProduct(product:Product): Observable<void>{
	
	let host=environment.host;
	return this.http.delete <void>(host+"/product/"+product.id);
}

//service of product-add
     save(product:Product): Observable<Product>{
	
	let host=environment.host;
	return this.http.post <Product>(host+"/product",product);
}

//services of product-edit
 getProduct(id: number ): Observable<Product> {
        let host=environment.host;
        return this.http.get <Product>(host+"/product/"+id);
    }
 updateProduct(product:Product ): Observable<Product> {
        let host=environment.host;
        return this.http.put <Product>(host+"/product/"+product.id,product);
    }

} 





