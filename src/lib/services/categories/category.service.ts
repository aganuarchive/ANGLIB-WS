import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExpCfgLoginService } from '../exp-cfg-login.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private cfgserv:ExpCfgLoginService, private http:HttpClient) { }

  getCategories():Observable<any> {
    return this.http.get(this.cfgserv.getKeyValue("category_get_url")) ;
  }
}
