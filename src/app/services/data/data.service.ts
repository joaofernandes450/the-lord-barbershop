import { Injectable } from '@angular/core';
import { STORES } from 'src/app/data/stores';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getStores() {
    return STORES;
  }
}
