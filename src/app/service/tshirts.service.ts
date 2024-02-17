import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProductResponse, Product } from '../common/tshirt.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TshirtsService {
  tshirtApiUrl = 'https://dummyjson.com/products';

  constructor(private _http: HttpClient) {}

  getProducts() {
    return this._http.get<IProductResponse>(this.tshirtApiUrl).pipe(
      map((resp) => {
        console.log(resp.products);
        return resp.products as Product[];
      })
    );
  }
}
