import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeArticleComponent } from './pages/home-article/home-article.component';
import { PostPageComponent } from './pages/post-page/post-page.component';

const routes: Routes = [
  {path : '', component : HomeArticleComponent},
  {path : 'post/:id', component : PostPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
