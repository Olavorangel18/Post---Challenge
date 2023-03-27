import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeArticleComponent } from './pages/home-article/home-article.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { BrokerBackendService } from './services/brocker-backend/brocker-backend.service';
import { HttpClientModule } from '@angular/common/http';
import { ArticleItemComponent } from './components/article-item/article-item.component';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { CommentComponent } from './components/comment/comment.component';
import { PostsService } from './services/posts/post.service';
import {NgxPaginationModule} from 'ngx-pagination';
import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeArticleComponent,
    ArticleItemComponent,
    PostPageComponent,
    CommentComponent,
    PaginationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    NgxSkeletonLoaderModule.forRoot({ animation: 'pulse', loadingText: 'This item is actually loading...' }),
  ],
  providers: [BrokerBackendService, PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
