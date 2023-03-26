import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeArticleComponent } from './pages/home-article/home-article.component';

const routes: Routes = [
  {path : '', component : HomeArticleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
