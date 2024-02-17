import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { IProductResponse, Product } from 'src/app/common/tshirt.model';
import { TshirtsService } from 'src/app/service/tshirts.service';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  cities!: City[];
  selectedCity!: City;

  selectedCities!: City[];

  inputMobile = '';

  visible: boolean = false;

  position: any = 'center';

  products: Product[] = [];
  isReadMore: boolean = true;

  thumbnail = 'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg';
  images = [
    'https://cdn.dummyjson.com/product-images/1/1.jpg',
    'https://cdn.dummyjson.com/product-images/1/2.jpg',
    'https://cdn.dummyjson.com/product-images/1/3.jpg',
    'https://cdn.dummyjson.com/product-images/1/4.jpg',
    'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg',
  ];

  constructor(private _http: HttpClient, private tshirt: TshirtsService) {}

  ngOnInit(): void {
    this.loadTemplate();

    this.tshirt.getProducts().subscribe((productsresp) => {
      this.products = productsresp;
    });
  }

  // initial config
  loadTemplate() {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];
  }

  // customizeResp() {
  //   return this._http
  //     .get<IProductResponse>('https://dummyjson.com/products')
  //     .pipe(
  //       map((resp) => {
  //         console.log(resp.products);
  //         return resp.products as Product[];
  //       })
  //     );
  // }

  showDialog(position: string) {
    const mobilePattern = new RegExp('^(0|91)?[6-9][0-9]{9}$');
    if (this.inputMobile && !mobilePattern.test(this.inputMobile)) {
      this.visible = true;
      this.position = position;
      // alert(`Invalid Mobile Number`);
      return;
    }

    // this.visible = true;
  }

  showText() {
    this.isReadMore = !this.isReadMore;
  }

  changeSourceImage(image: string) {
    this.thumbnail = image;
  }
}
