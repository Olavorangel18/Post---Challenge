import { Component, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {


  // Informaçoes da Página
  page: number = 1;
  @Input() pageSize: number = 0;
  lastPage: number | undefined;
  listaPages: number[] = [];

  // Controles de eventos
  @Output() nextPageEmitter = new EventEmitter();
  @Output() prevPageEmitter = new EventEmitter();
  @Output() changePageEmitter = new EventEmitter();


  /*------------------------------------------------------*/
   
  //                    Inicialização

  /*------------------------------------------------------*/

  ngOnChanges(changes: SimpleChanges){
    if(changes['page']) this.lastPage = changes['page'].previousValue
    if(changes['pageSize']) this.listarPages();
  }

  ngAfterViewChecked(){
    document.querySelector(`#page-${this.page}`)?.classList.add('active');
  }


  /*------------------------------------------------------*/
   
  //                Controles da Paginação

  /*------------------------------------------------------*/

  activePage(){
    document.querySelectorAll('.page').forEach(item => item.classList.remove('active'));
    document.querySelector(`#page-${this.page}`)?.classList.add('active');
  }

  nextPage(){
    this.page = (this.page + 1) % this.pageSize;
    this.nextPageEmitter.emit();
    this.activePage();
  }

  prevPage(){
    this.page = (this.page - 1) % this.pageSize;
    this.prevPageEmitter.emit();
    this.activePage();
  }

  changePage(e:any){
    this.page = Number(e.currentTarget.id.split('-')[1]);
    const page = e.currentTarget.id.split('-')[1];
    this.changePageEmitter.emit(page);
    this.activePage();
  }

  listarPages(){
    this.listaPages = Array.from({ length: this.pageSize }, (_, i) => i + 1);
  }



}
