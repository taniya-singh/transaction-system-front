import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams } from "@angular/common/http";
import { Observable, of, Subject } from "rxjs";
import { catchError } from "rxjs/operators";
import { ToastrService } from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";

import { environment } from "./../../../environments/environment";

const httpOptions = (token: any = "") => ({
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    Authorization: token
  })
});
@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  private apiURL: any = environment.siteURL + environment.apiVer;
  constructor(private http: HttpClient, private toastr: ToastrService,public spinner:NgxSpinnerService
  ) { }

  getQuery(endpoint: string, query: any = {}) {
    const params = new HttpParams()
  .set('page', '3')
  .set('sort', '1');
    return this.http
      .get(`${this.apiURL + endpoint + "?" + params}`, httpOptions())
      .pipe(catchError(this.handleError("getData", [])));
  }
 

  post(endpoint: string, data: any) {
    return this.http
      .post(`${this.apiURL + endpoint}`, data, httpOptions())
      .pipe(catchError(this.handleError("getData", [])));
  }
  
  postAuth(endpoint: string, data: any,token:string) {

    return this.http
      .post(`${this.apiURL + endpoint}`, data, httpOptions(token))
      .pipe(catchError(this.handleError("getData", [])));
  }
  postData(endpoint: string, data: any, token: string) {
    return this.http
      .post(`${this.apiURL + endpoint}`, data, httpOptions(token))
      .pipe(catchError(this.handleError("getData", [])));
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (errorResult: any): Observable<T> => {
      this.toastr.error(errorResult.error.message?errorResult.error.message:"Error");
      this.spinner.hide()
      return of(result as T);
    };
  }
}
