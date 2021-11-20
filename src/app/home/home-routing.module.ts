import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuardGuard } from '../auth-guard.guard'


const routes: Routes = [
  { path: "home", component: HomeComponent, canActivate: [AuthGuardGuard] },
  { path: "", component: HomeComponent, canActivate: [AuthGuardGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
