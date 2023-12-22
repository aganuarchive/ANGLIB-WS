import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ExpCfgLoginService } from '../exp-cfg-login.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private cfgserv:ExpCfgLoginService, private http:HttpClient) { }

  getItems(searchitem:any):Observable<any> {
    return this.http.get(this.cfgserv.getKeyValue("item_get_url") + "?searchitem=" + searchitem) ;
  }

  createItem(data:any):Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
        return this.http.post(this.cfgserv.getKeyValue("item_post_url"), data, httpOptions) ;
    }
    
    updateItem(data:any):Observable<any> {
      console.log("In updateLocation  " + this.cfgserv.getKeyValue("item_put_url")) ;
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };
//          return this.http.put(this.cfgserv.getKeyValue("item_put_url"), data, httpOptions) ;
          return this.http.post(this.cfgserv.getKeyValue("item_put_url"), data, httpOptions) ;
    }
    
    deleteItem(id:number):Observable<any> {
      return this.http.delete(this.cfgserv.getKeyValue("item_delete_url") + id) ;
    }
    
}
