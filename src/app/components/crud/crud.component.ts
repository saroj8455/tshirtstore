import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import {
  ITicket,
  ITicketResp,
  Ticket,
  baseUrl,
} from 'src/app/utils/common.util';

export interface OriginalEvent {
  headers: {
    normalizedNames: {};
    lazyUpdate: null;
  };
  status: number;
  statusText: string;
  url: string;
  ok: boolean;
  type: number;
  body: {
    file_name: string;
    status: boolean;
  };
}

export interface ObjectURL {
  changingThisBreaksApplicationSecurity: string;
}

export interface File {
  objectURL: ObjectURL;
}

export interface Root {
  originalEvent: OriginalEvent;
  files: File[];
}

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css'],
})
export class CrudComponent implements OnInit {
  ticket: ITicket = {
    title: '',
    category: '',
    description: '',
  };

  ticketsArray: Ticket[] = [];
  ticketCount = 0;
  visible: boolean = false;
  selectedTickedId!: string;

  // Upload image
  uploadedFiles: any[] = [];

  constructor(
    private _http: HttpClient,
    private messageService: MessageService
  ) {}
  ngOnInit(): void {
    this._http.get<ITicketResp>(baseUrl).subscribe((resp) => {
      this.ticketsArray = resp.tickets;
      this.ticketCount = resp.count;
    });
  }
  createTicket() {
    this._http.post(baseUrl, this.ticket).subscribe((resp) => {
      console.log(resp);
    });
  }
  deleteTicket(ticket: Ticket) {
    console.log(ticket._id);
    this._http.delete(baseUrl + '?Id=' + ticket._id).subscribe((resp) => {
      console.log(resp);
    });
  }
  editTicket(ticket: Ticket) {
    this.visible = !this.visible;
    this.selectedTickedId = ticket._id;
    this.ticket.title = ticket.title;
    this.ticket.category = ticket.category;
    this.ticket.description = ticket.description;
  }
  updateTicket() {
    this._http
      .put(baseUrl + '?Id=' + this.selectedTickedId, this.ticket)
      .subscribe((resp) => {
        console.log(resp);
      });
  }
  onUpload(event: any) {
    const uploadResp = { ...event } as Root;
    console.log(uploadResp.originalEvent.body);
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }

    this.messageService.add({
      severity: 'info',
      summary: 'File Uploaded',
      detail: 'Done',
    });
  }
}
