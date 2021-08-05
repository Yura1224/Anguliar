import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanDeactivate, CanActivate, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserDeactivatorService implements CanDeactivate<any>,CanActivate {

  constructor() {

  }
  canDeactivate(component: any, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot)
    : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree{
      return confirm("Are you sure to /users/:id?")
}
canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree{
 return +route.params.id <= 10 && +route.params.id >0;
}
}
