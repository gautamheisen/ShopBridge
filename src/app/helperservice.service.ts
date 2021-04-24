import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HelperserviceService {
Url = "assets/mockdata.json"
private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
  
    console.error('An error occurred:', error.error.message);
  } else {
    
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  // Return an observable with a user-facing error message.
  return throwError(
    'Something bad happened; please try again later.');
}
UserName = ""
  constructor(private http:HttpClient) { }
  getInventoryList(){
   return this.http.get(this.Url).pipe(
    catchError(this.handleError)
   )
  }
  postInventory(data){
    return this.http.post(this.Url,data).pipe(
      catchError(this.handleError)
     )
  }
  UpdateInventory(data){
    return this.http.put(this.Url,data).pipe(
      catchError(this.handleError)
     )
  }
  DeleteInventory(data){
    return this.http.delete(this.Url+'/'+data.id).pipe(
      catchError(this.handleError)
     )
  }
  setUserName(username:any){
this.UserName = username
  }
}
