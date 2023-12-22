import { LocationStrategy } from '@angular/common';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExpCfgLoginService {

  logindata = {
    loggedin : false,
    username :"" 
  }


  private fdparamsmap: {[key:string]:string} = {"basehref":this.locst.getBaseHref()};

  constructor(private http:HttpClient, private locst:LocationStrategy) { }

  public loadConfig(pdata:any) {
    this.http.get( this.locst.getBaseHref() + "assets/config/fdconfig.json").subscribe( data =>{
      let appConfig:any = data ;
//      console.log("AppConfig = " + data) ;
      for (var i in appConfig.configparams) {
        this.fdparamsmap[appConfig.configparams[i][0].name] = appConfig.configparams[i][1].value ;
      }
      pdata.configLoaded = true ;
      for (var k in this.fdparamsmap)  {
        console.log( "ConfigKey = " + k + " value = " + this.fdparamsmap[k]) ;
      }     

    })
  }

  public getKeyValue(pkey:string):string {
    return this.fdparamsmap[pkey] ;
  }

  login(username:string, password:string):Observable<any> {
//    console.log("username = " + username ) ;
    if (username=='admin') {
      this.logindata.loggedin = true;
      this.logindata.username = username ;
//      console.log("ifloggedin" ) ;
    }
      return of(this.logindata.loggedin).pipe(
        delay(1000),
        tap(val=>{
          console.log("Login successful" + val);
        })
      ) 
    

  }

  logout() {
    this.logindata.loggedin = false;

  }

  public isLoggedIn() {
    return this.logindata.loggedin ;
  }

  getGetUrl():Observable<any> {
    return this.http.get(this.getKeyValue("location_get_url")) ;
  }

}

