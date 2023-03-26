import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.scss']
})
export class ArticleItemComponent {

  imageToShow: boolean = false;
  @Input() articleTitle: string = "";

  ngOnInit(){
    this.showImages();
  }

  showImages(){
    setInterval(() => {
        this.imageToShow = true;
    },1000)
  }


}
