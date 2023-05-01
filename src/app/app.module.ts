import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';

import {AppRoutingModule, routingComponents} from './app-routing.module';
import {AppComponent} from './app.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {SessionOverviewComponent} from './components/session-overview/session-overview.component';
import {SingleAttributeComponent} from './components/session-overview/single-attribute/single-attribute.component';
import {MultiAttributeComponent} from './components/session-overview/multi-attribute/multi-attribute.component';
import {DualAttributeComponent} from './components/session-overview/dual-attribute/dual-attribute.component';
import {UploadFileComponent} from './components/upload-file/upload-file.component';
import {HttpClientModule} from '@angular/common/http';
import {UsageProfileTableComponent} from "./components/usage-profile-table/usage-profile-table.component";
import {MatTableModule} from '@angular/material/table';
import {MatDividerModule} from '@angular/material/divider';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    SessionOverviewComponent,
    SingleAttributeComponent,
    MultiAttributeComponent,
    DualAttributeComponent,
    UploadFileComponent,
    UsageProfileTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatDividerModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
