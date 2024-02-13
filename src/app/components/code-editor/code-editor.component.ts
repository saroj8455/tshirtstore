import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.css'],
})
export class CodeEditorComponent implements OnInit {
  text!: string;
  items!: MenuItem[];
  activeItem!: MenuItem;
  personlItem!: MenuItem[];
  ngOnInit(): void {
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: '/home' },
      { label: 'Calendar', icon: 'pi pi-fw pi-calendar' },
      { label: 'Edit', icon: 'pi pi-fw pi-pencil' },
      { label: 'Documentation', icon: 'pi pi-fw pi-file' },
      { label: 'Settings', icon: 'pi pi-fw pi-cog' },
    ];
    this.activeItem = this.items[0];

    this.personlItem = [
      {
        label: 'Personal',
        routerLink: 'personal',
      },
      {
        label: 'Seat',
        routerLink: 'seat',
      },
      {
        label: 'Payment',
        routerLink: 'payment',
      },
      {
        label: 'Confirmation',
        routerLink: 'confirmation',
      },
    ];
  }

  myUploader(event: any) {
    //event.files == files to upload
    console.log(event.files[0]);
  }
}
