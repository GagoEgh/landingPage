import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { 
  ChannelsComponent,
  HeaderComponent, 
  HrComponent, 
  MainComponent, 
  MonitoringComponent, 
  OnlineComponent, 
  SectionsComponent, 
  TaskComponent, 
  TimeComponent
} from './components';









@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionsComponent,
    MainComponent,
    TimeComponent,
    MonitoringComponent,
    TaskComponent,
    ChannelsComponent,
    HrComponent,
    OnlineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
