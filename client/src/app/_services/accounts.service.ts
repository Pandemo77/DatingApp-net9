import { HttpClient } from '@angular/common/http';
import { Injectable, inject, model } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  private http = inject(HttpClient);
  baseUrl = 'https://localhost:7088/api/'

  login(model: any){
    return this.http.post(this.baseUrl + 'account/login', model);
  }
}
