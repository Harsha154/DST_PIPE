import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
  })
export class IQueryContent {
   name: string;
   email: string;
   query: string;
}