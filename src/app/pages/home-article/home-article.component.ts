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

  // Listagem de Posts
  listaPosts: any[] = [];

  // Post Principal
  ImagePrincipalArticle: boolean = false;
  principalArticleId: number = 0;
  principalArticleTitle: string = '';
  principalArticleBody: string = '';
  
  // Paginação
  page:number = 0;
  totalPages:number = 0;

  ngOnInit(): void {
    this.getPosts();
    this.showPrincipalArticle();
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
      this.listaPosts = this.divideLista(this.listaPosts, 10);
      this.totalPages = this.listaPosts.length;
    }, error => {
      console.log(error)
    });
  }

  /*------------------------------------------------------*/
   
  //                    Paginação

  /*------------------------------------------------------*/

  prevPage(){
    this.page = (this.page - 1) % this.totalPages;
  }

  nextPage(){
    this.page = (this.page + 1) % this.totalPages;
  }

  changePage(page:number){
    this.page = page - 1;
  }

  /*------------------------------------------------------*/
   
  //                     Diversos

  /*------------------------------------------------------*/

  showPrincipalArticle(){
    setInterval(() => {
        this.ImagePrincipalArticle = true;
    },2000)
  }

  divideLista(lista:any[], n:number) {
    var subListas = [];
    var tamanhoSubLista = Math.ceil(lista.length/n);
    
    for (var i = 0; i < lista.length; i += tamanhoSubLista) {
      subListas.push(lista.slice(i, i+tamanhoSubLista));
    }
    
    return subListas;
  }

  openPost(e:any){
    this.router.navigateByUrl(`/post/${e.currentTarget.id}`);
  }

}
