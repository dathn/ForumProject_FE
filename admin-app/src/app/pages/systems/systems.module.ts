import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemsComponent } from './systems.component';
import { UsersComponent } from './users/users.component';
import { RolesComponent } from './roles/roles.component';
import { PermissionsComponent } from './permissions/permissions.component';



@NgModule({
  declarations: [SystemsComponent, UsersComponent, RolesComponent, PermissionsComponent],
  imports: [
    CommonModule
  ]
})
export class SystemsModule { }
