import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { PostsService } from 'src/app/services/posts/post.service';
import { UsersService } from 'src/app/services/users/user.service';
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
      private userService: UsersService
    ) { }

    // Informações do Post
    id: number = 0;
    titlePost: string = '';
    bodyPost: string = '';
    userId: number | undefined;
    nameUser: string = '';
    emailUser: string = '';

    // Controles de exibição
    postCharged: boolean = false;
    ImagePrincipalArticle: boolean = false;

    // listagem de comentários
    commentList: Comment[] = [];



    ngOnInit(): void {
      this.id = Number(this.route.snapshot.params['id']);
      this.showPrincipalArticle();
      this.getPostByID();
      this.getCommentsPostByID();
    }



  /*------------------------------------------------------*/
   
  //               Requisições para o backend

  /*------------------------------------------------------*/

  getPostByID() {
    this.postService.getPostByID(this.id).subscribe((response: Post) => {
      this.titlePost = response.title;
      this.bodyPost = response.body;
      this.userId = response.userId;
      this.postCharged = true;
      this.getUserByID(this.userId);
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

  getUserByID(id:number) {
    this.userService.getUserByID(id).subscribe((response: any) => {
      this.emailUser = response.email;
      this.nameUser = response.name;
      },
      error => {
        console.log(error)
      })
  }

  /*------------------------------------------------------*/
   
  //                     Diversos

  /*------------------------------------------------------*/

  showPrincipalArticle(){
    setInterval(() => {
        this.ImagePrincipalArticle = true;
    },2000)
  }
    
}
