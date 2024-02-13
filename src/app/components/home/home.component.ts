import { Component, OnInit } from '@angular/core';

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

  ngOnInit(): void {
    this.loadTemplate();
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
}
