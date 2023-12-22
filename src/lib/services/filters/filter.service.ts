import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExpCfgLoginService } from '../exp-cfg-login.service';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor(private cfgserv:ExpCfgLoginService, private http:HttpClient) { }

  getFilters():Observable<any> {
    return this.http.get(this.cfgserv.getKeyValue("filter_get_url")) ;
  }

}
