import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './component/table/table.component';
import { AddtaskComponent } from './component/addtask/addtask.component';
import { ViewtaskComponent } from './component/viewtask/viewtask.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ForgotpasswordComponent } from './component/forgotpassword/forgotpassword.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
path:'addtask',
component:AddtaskComponent
  },
  {
    path:'viewtask',
    component:ViewtaskComponent
  },
  {
    path:'table',
    component:TableComponent
  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path:'forgotpassword',
    component:ForgotpasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
