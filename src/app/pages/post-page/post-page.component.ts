import { Component } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { PostsService } from 'src/app/services/posts/post.service';
import {Comment} from 'src/app/models/comment.model';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent {
  constructor(
    private route: ActivatedRoute,
    private postService: PostsService,
    ) { }
    id: number = 0;
    titlePost: string = '';
    bodyPost: string = '';
    ImagePrincipalArticle: boolean = false;
    commentList: Comment[] = [];
    postCharged: boolean = false;


    ngOnInit(): void {
      this.id = Number(this.route.snapshot.params['id']);
      this.showPrincipalArticle();
      this.getPostByID();
      this.getCommentsPostByID();
    }

    showPrincipalArticle(){
      setInterval(() => {
          this.ImagePrincipalArticle = true;
      },2000)
    }

  /*------------------------------------------------------*/
   
  //               Requisições para o backend

  /*------------------------------------------------------*/

  getPostByID() {
    this.postService.getPostByID(this.id).subscribe((response: Post) => {
      this.titlePost = response.title;
      this.bodyPost = response.body;
      this.postCharged = true;
      },
      error => {
        console.log(error)
      })
      
  }

  getCommentsPostByID() {
    this.postService.getPostByIDComments(this.id).subscribe((response: any) => {
      response.forEach((comment:any) => {
        this.commentList.push(
          new Comment(
            comment.body,
            comment.email,
            comment.id,
            comment.name,
            comment.postId
          )
        )
      })
      },
      error => {
        console.log(error)
      })
  }
    
}
