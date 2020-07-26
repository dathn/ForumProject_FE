import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentsComponent } from './contents.component';
import { CategoriesComponent } from './categories/categories.component';
import { ForumComponent } from './forum/forum.component';
import { CommentsComponent } from './comments/comments.component';
import { ReportsComponent } from './reports/reports.component';
import { ContentsRoutingModule } from './contents-routing.module';



@NgModule({
    declarations: [
        ContentsComponent,
        CategoriesComponent,
        ForumComponent,
        CommentsComponent,
        ReportsComponent
    ],
    imports: [
        CommonModule,
        ContentsRoutingModule
    ]
})
export class ContentsModule { }
