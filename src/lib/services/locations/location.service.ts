import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExpCfgLoginService } from '../exp-cfg-login.service';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private cfgserv:ExpCfgLoginService, private http:HttpClient) { }

  getLocations():Observable<any> {
    return this.http.get(this.cfgserv.getKeyValue("location_get_url")) ;
  }

createLocation(data:any):Observable<any> {
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
    return this.http.post(this.cfgserv.getKeyValue("location_post_url"), data, httpOptions) ;
}

updateLocation(data:any):Observable<any> {
  console.log("In updateLocation  " + this.cfgserv.getKeyValue("location_put_url")) ;
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
      return this.http.put(this.cfgserv.getKeyValue("location_put_url"), data, httpOptions) ;
  }

deleteLocation(id:number):Observable<any> {
  return this.http.delete(this.cfgserv.getKeyValue("location_delete_url") + id) ;
}

}
