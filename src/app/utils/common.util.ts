export const _IS_ARRAY = 'IS ARRAY';

export const baseUrl = 'http://localhost:3002/api/tickets';
export interface ITicket {
  title: string;
  description: string;
  category: string;
}

export interface Ticket {
  _id: string;
  title: string;
  description: string;
  category: string;
  createdAt: string;
  updatedAt?: string;
  __v: number;
}

export interface ITicketResp {
  message: string;
  count: number;
  tickets: Ticket[];
}

export interface UpdateTicket {
  _id: string;
  title: string;
  description: string;
  category: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  image: string;
}

export interface IUploadResp {
  message: string;
  Id: string;
  updateTicket: UpdateTicket;
}
export interface Product {
  id?: string;
  code?: string;
  name?: string;
  description?: string;
  price?: number;
  quantity?: number;
  inventoryStatus?: string;
  category?: string;
  image?: string;
  rating?: number;
}
