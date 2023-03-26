import { Component } from '@angular/core';

@Component({
  selector: 'app-home-article',
  templateUrl: './home-article.component.html',
  styleUrls: ['./home-article.component.scss']
})
export class HomeArticleComponent {

  constructor(

  ) { }

  ImagePrincipalArticle: boolean = false;

  ngOnInit(): void {
    this.showPrincipalArticle();
  }

  showPrincipalArticle(){
    setInterval(() => {
        this.ImagePrincipalArticle = true;
    },2000)
  }

}
