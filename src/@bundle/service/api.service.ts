import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'environments/environment';
import { AlertMessageService } from '@bundle/dialog/alert-message/alert-message.service';
import { AuthService } from 'app/core/auth/auth.service';
import { ApiResponseModel } from 'app/core/model/api-model';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

// loading: BehaviorSubject<boolean>;
  // urlChange: BehaviorSubject<any>;
  httpRequestChange: BehaviorSubject<number>;
  httpRequest: number;
  private url = environment.api;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }),
    params: undefined
  };
  // private httpFileOptions = {
  //   headers: new HttpHeaders({
  //     responseType: 'blob'
  //   }),
  //   params: null
  // };
  constructor(
    private _httpClient: HttpClient,
    private alert: AlertMessageService,
    private spinner: NgxSpinnerService,
    private authService: AuthService

  ) {
    // this.urlChange = new BehaviorSubject('');
    // this.urlChange.subscribe(res => {
    //   if (res) {
    //     this.url = res;
    //   }
    // })

    this.httpRequestChange = new BehaviorSubject(0);
    this.httpRequest = 0;
    this.httpRequestChange.subscribe(res => {
      if (res > 0) { // show loading api
        this.spinner.show();
      } else {
        this.spinner.hide();
      }
    })
  }

  get(action: string, params?: any): Observable<any> {
    this.httpOptions.params = params;
    const httpRequest = this._httpClient.get(`${this.url}${action}`, this.httpOptions);
    return this.handleResponse(httpRequest);
  }

  post(action: string, requestData: any, params?: any, alert?: boolean, url?: string): Observable<any> {
    this.httpOptions.params = params;
    const baseUrl = url || this.url;
    const httpRequest = this._httpClient.post<any>(`${baseUrl}${action}`, requestData, this.httpOptions);
    return this.handleResponse(httpRequest, alert);
  }

  put(action: string, requestData: any, params?: any, alert?: boolean): Observable<any> {
    this.httpOptions.params = params;
    const httpRequest = this._httpClient.put(`${this.url}${action}`, requestData, this.httpOptions);
    return this.handleResponse(httpRequest, alert);
  }

  postForm(action: string, requestData: FormData, alert?: boolean): Observable<any> {
    const httpRequest = this._httpClient.post(`${this.url}${action}`, requestData);
    return this.handleResponse(httpRequest, alert);
  }

  // getFile(url: string, params?: any): Observable<Blob> {
  //   this.httpFileOptions.params = params;
  //   return this.httpClient.get<Blob>(url, this.httpFileOptions);
  // }



  private handleResponse(httpRequest: Observable<any>, alert?: boolean): Observable<any> {
    this.updateRequest(1);
    return httpRequest.pipe(
      map((next: ApiResponseModel) => {
        this.updateRequest(-1);
        console.log('handleResponse next', next)
        if (next.message?.type === 'danger' || next.message?.type === 'warn') {
          this.alert.open({
            title: next.message.title,
            message: next.message.detail
          }).then(res => {
            return false;
          });

        } else {
          return next.data || true;
        }
      }, (error: any) => {
        console.log('handleResponse error', error)
        this.updateRequest(-1);
        if (error.message.type === 'danger' || error.message.type === 'warn') {
          this.alert.open({
            title: error.message.title,
            message: error.message.detail
          }).then(res => {
            return error;
          });
        } else {
          return error;
        }
      }), catchError(httpError => {
        this.updateRequest(-1);
        console.log('catchError httpError', httpError)
        if (httpError) {

          const { error, status, statusText } = httpError;

          const { statusCode, message } = error;
          if (status == 401) {
            this.authService.logout();
          }

          // const progressEvent = httpError as ProgressEvent;
          // if (progressEvent.type === 'error') {
          //   // this.alert.open({
          //   //   title: 'การเชื่อมต่อ',
          //   //   message: 'ดำเนินการไม่สำเร็จ กรุณาติดต่อเจ้าหน้าที่'
          //   // });
          //   return throwError(progressEvent);
          // }

          // const error = httpError.error as ApiResponseModel;    
          // if (error.message?.type === 'danger') {
          //   // this.alert.open({
          //   //   title: error.message.title,
          //   //   message: error.message.detail
          //   // });
          //   return throwError(httpError);
          // }

          // this.alert.open({
          //   title: 'การเชื่อมต่อ',
          //   message: 'เกิดความผิดพลาด กรุณาติดต่อเจ้าหน้าที่'
          // });

        }


        return throwError(httpError);
      }));
  }
  updateRequest(httpRequest: number) {
    this.httpRequest += httpRequest;
    this.httpRequestChange.next(this.httpRequest);
  }

}
