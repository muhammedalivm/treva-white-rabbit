import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuardGuard } from '../auth-guard.guard'

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    // canActivate: [AuthGuardGuard]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
