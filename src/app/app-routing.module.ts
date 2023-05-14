import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {SessionOverviewComponent} from './components/session-overview/session-overview.component';
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { ProfilingDataListComponent } from './components/profiling-data-list/profiling-data-list.component';
import { authGuard } from './services/auth-service/auth-guard.service';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'signUp', component: RegisterComponent},
  {path: 'session-overview', component: SessionOverviewComponent, canActivate: [authGuard]},
  {path: "upload-file", component: UploadFileComponent, canActivate: [authGuard]},
  {path: "profiling-data-list", component: ProfilingDataListComponent, canActivate: [authGuard]},
  {path: "**", component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routingComponents = [LoginComponent, RegisterComponent, PageNotFoundComponent,ProfilingDataListComponent ]
