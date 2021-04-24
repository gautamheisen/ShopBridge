import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import{HelperserviceService} from './helperservice.service'
import { Observable } from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private helper :HelperserviceService,private router:Router ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
if(this.helper.UserName!=undefined && this.helper.UserName!=''){
    return true;
}
else{
  this.router.navigateByUrl('')
  return false;
}
  }
  
}
