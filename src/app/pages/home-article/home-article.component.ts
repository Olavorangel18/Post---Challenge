import { Component } from '@angular/core';

@Component({
  selector: 'app-home-article',
  templateUrl: './home-article.component.html',
  styleUrls: ['./home-article.component.scss']
})
export class HomeArticleComponent {

  constructor(

  ) { }

  imageToShow: boolean = false;
  ImagePrincipalArticle: boolean = false;

  ngOnInit(): void {
    this.showImages();
    this.showPrincipalArticle();
  }

  showImages(){
    setInterval(() => {
        this.imageToShow = true;
    },1000)
  }

  showPrincipalArticle(){
    setInterval(() => {
        this.ImagePrincipalArticle = true;
    },2000)
  }

}
