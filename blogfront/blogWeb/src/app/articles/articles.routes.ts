import { Routes } from "@angular/router";
import { ArticleListComponent } from "./article-list/article-list.component";
import { ArticleDetailComponent } from "./article-detail/article-detail.component";


export const ARTICLES_ROUTES: Routes = [
    { path: ':slug', component: ArticleDetailComponent },
    { path: '', component: ArticleListComponent }
];