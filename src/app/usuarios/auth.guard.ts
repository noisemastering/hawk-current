import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from '../shared/classes/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      let opt: boolean= false;
      if(localStorage.getItem('Usuario')!=null)
        {
          let user: Usuario;
          user= JSON.parse(localStorage.getItem('Usuario') ||'{}');
          //console.log("User auth: ", user);
          if (user.Token!=null) opt= true;
        }
      else{
        this.router.navigate(['/usuario/login']);
        opt= false;
      }
      return (opt);
  }
  
}
