import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { MissComponent } from './miss/miss.component';

const routes: Routes = [
  {path: '', component: MissComponent,},
  {path: 'admin', component: AdminComponent,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
