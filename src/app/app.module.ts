import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';

import {AppRoutingModule, routingComponents} from './app-routing.module';
import {AppComponent} from './app.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { SessionOverviewComponent } from './components/session-overview/session-overview.component';
import { SingleAttributeComponent } from './components/session-overview/single-attribute/single-attribute.component';
import { MultiAttributeComponent } from './components/session-overview/multi-attribute/multi-attribute.component';
import { DualAttributeComponent } from './components/session-overview/dual-attribute/dual-attribute.component';
import { OverviewBarChartComponent } from './components/overview-bar-chart/overview-bar-chart.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { HttpClientModule } from '@angular/common/http';
import { HeatMapComponent } from './heat-map/heat-map.component';


@NgModule({
  declarations: [
    AppComponent,
    OverviewBarChartComponent,
    routingComponents,
    SessionOverviewComponent,
    SingleAttributeComponent,
    MultiAttributeComponent,
    DualAttributeComponent,
    UploadFileComponent,
    HeatMapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    NgApexchartsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
