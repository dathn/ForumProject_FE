import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemsComponent } from './systems.component';
import { UsersComponent } from './users/users.component';
import { RolesComponent } from './roles/roles.component';
import { PermissionsComponent } from './permissions/permissions.component';
import { SystemsRoutingModule } from './systems-routing.module';
import { FunctionsComponent } from './functions/functions.component';



@NgModule({
    declarations: [
        SystemsComponent,
        UsersComponent,
        RolesComponent,
        PermissionsComponent,
        FunctionsComponent
    ],
    imports: [
        CommonModule,
        SystemsRoutingModule
    ]
})
export class SystemsModule { }
