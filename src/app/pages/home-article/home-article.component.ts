import { Component } from '@angular/core';
import { PostsService } from 'src/app/services/posts/post.service';
import { Post } from 'src/app/models/post.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-article',
  templateUrl: './home-article.component.html',
  styleUrls: ['./home-article.component.scss']
})
export class HomeArticleComponent {

  constructor(
    private postService: PostsService,
    private router: Router
  ) { }

  listaPosts: any[] = [];

  ImagePrincipalArticle: boolean = false;
  principalArticleId: number = 0;
  principalArticleTitle: string = '';
  principalArticleBody: string = '';

  ngOnInit(): void {
    this.getPosts();
    this.showPrincipalArticle();
  }

  showPrincipalArticle(){
    setInterval(() => {
        this.ImagePrincipalArticle = true;
    },2000)
  }

  /*------------------------------------------------------*/
   
  //               Requisições para o backend

  /*------------------------------------------------------*/

  getPosts() {
    this.postService.getPosts().subscribe((response: Post[]) => {
      response.forEach(post => {
        this.listaPosts.push(new Post(
          post.userId,
          post.id,
          post.title,
          post.body,
        ));
      })

      this.principalArticleId = this.listaPosts[0].id;
      this.principalArticleTitle = this.listaPosts[0].title;
      this.principalArticleBody = this.listaPosts[0].body;
      
    }, error => {
      console.log(error)
    });
  }

  openPost(e:any){
    this.router.navigateByUrl(`/post/${e.currentTarget.id}`);
  }

}
