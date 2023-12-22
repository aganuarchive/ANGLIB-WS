import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExpCfgLoginService } from '../exp-cfg-login.service';

@Injectable({
  providedIn: 'root'
})
export class SubitemService {

  constructor(private cfgserv:ExpCfgLoginService, private http:HttpClient) { }

  getSubitems():Observable<any> {
    return this.http.get(this.cfgserv.getKeyValue("subitem_get_url")) ;
  }

}
