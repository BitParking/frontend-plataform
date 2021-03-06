import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ReservaClient {
  private BASE_URL:string = 'https://firestore.googleapis.com/v1beta1/';
  constructor(public http: Http) { }

  insert(reservaEntity: any,token:string) {
    return new Promise((resolve, reject) => {
      let url = this.BASE_URL + 'projects/bitparking-tcc/databases/(default)/documents/reservas/';

      let header =  new Headers()
      header.append('Authorization', `Bearer ${token}`)     

      this.http.post(url, reservaEntity,{headers:header})
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }

  findByUidMotorista(selectQuery:any,token:string){
    return new Promise((resolve, reject) => {
      let url = this.BASE_URL + 'projects/bitparking-tcc/databases/(default)/documents:runQuery';

      let header =  new Headers()
      header.append('Authorization', `Bearer ${token}`)     

      this.http.post(url, selectQuery,{headers:header})
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }
}