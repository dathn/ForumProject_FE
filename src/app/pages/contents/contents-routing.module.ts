import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { ForumComponent } from './forum/forum.component';
import { CommentsComponent } from './comments/comments.component';
import { ReportsComponent } from './reports/reports.component';


const routes: Routes = [
    {
        path: '',
        component: ForumComponent
    },
    {
        path: 'forum',
        component: ForumComponent
    },
    {
        path: 'categories',
        component: CategoriesComponent
    },
    {
        path: 'comments',
        component: CommentsComponent
    },
    {
        path: 'reports',
        component: ReportsComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ContentsRoutingModule { }
