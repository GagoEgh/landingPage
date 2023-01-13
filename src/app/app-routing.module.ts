import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChannelsComponent, HrComponent, MonitoringComponent, OnlineComponent, TaskComponent, TimeComponent } from './components';

const routes: Routes = [

  { path: '', redirectTo: 'time', pathMatch: 'full' },
  { path: 'time', component: TimeComponent },
  { path: 'monitoring', component: MonitoringComponent },
  { path: 'task', component: TaskComponent },
  { path: 'channels', component: ChannelsComponent },
  {path:'hr', component:HrComponent},
  {path:'online', component:OnlineComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
