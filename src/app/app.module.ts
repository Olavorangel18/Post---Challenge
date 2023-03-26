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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeArticleComponent,
    ArticleItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSkeletonLoaderModule.forRoot({ animation: 'pulse', loadingText: 'This item is actually loading...' }),
  ],
  providers: [BrokerBackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
