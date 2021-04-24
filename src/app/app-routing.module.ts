import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { InventoryComponent } from './inventory/inventory.component';
import {AuthGuardGuard} from './auth-guard.guard'

const routes: Routes = [
  {path:'',component :LoginPageComponent  },
  {path:'inventory',component : InventoryComponent,canActivate:[AuthGuardGuard]  },
  // {path:'sample/:id',component : Sample2Component },
  {path:'**',component :LoginPageComponent },
 
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
