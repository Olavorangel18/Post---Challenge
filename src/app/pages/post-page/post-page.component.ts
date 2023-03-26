import { Component } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { PostsService } from 'src/app/services/complaints/post.service';
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


    ngOnInit(): void {
      this.id = Number(this.route.snapshot.params['id']);
      this.getPostByID();
    }

  /*------------------------------------------------------*/
   
  //               Requisições para o backend

  /*------------------------------------------------------*/

  getPostByID() {
    this.postService.getPostByID(this.id).subscribe((response: Post) => {
      this.titlePost = response.title;
      this.bodyPost = response.body;
      },
      error => {
        console.log(error)
      })
      
  }
    
}
