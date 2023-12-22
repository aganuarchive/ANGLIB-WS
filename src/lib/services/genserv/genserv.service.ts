import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExpCfgLoginService } from '../exp-cfg-login.service';

@Injectable({
  providedIn: 'root'
})
export class GenservService {

  constructor(private cfgserv:ExpCfgLoginService, private http:HttpClient) { }

  getSubitems():Observable<any> {
    return this.http.get(this.cfgserv.getKeyValue("subitem_get_url")) ;
  }

  getFilters():Observable<any> {
    return this.http.get(this.cfgserv.getKeyValue("filter_get_url")) ;
  }

  getCategories():Observable<any> {
    return this.http.get(this.cfgserv.getKeyValue("category_get_url")) ;
  }

  getCostcentres():Observable<any> {
    return this.http.get(this.cfgserv.getKeyValue("costcentre_get_url")) ;
  }

}
