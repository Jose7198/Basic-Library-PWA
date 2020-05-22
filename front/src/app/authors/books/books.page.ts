import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/dto/Book';
import { ActionSheetController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { SessionService } from 'src/app/services/session/session.service';
import { BookHttpService } from 'src/app/services/book-http/book-http.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.page.html',
  styleUrls: ['./books.page.scss'],
})
export class BooksPage implements OnInit {

  books : Book[] 
  searchText = ''
  authorId = 0

  constructor(public actionSheetController: ActionSheetController,
    private readonly _router : Router,
    private readonly _session : SessionService,
    private readonly _bookHttp : BookHttpService,
    private readonly _activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    var param$ = this._activatedRoute.queryParams
    param$.subscribe(
      (parametros) =>{
        this.authorId = parametros.idAutor
      }
    )
    this.books = this._session.books.filter(item => {
      return item['author_FK'].id == this.authorId
    })
  }

  async presentActionSheet(index) {
    const actionSheet = await this.actionSheetController.create({
      header: `${this.books[index].name}`,
      buttons: [{
        text: 'Borrar',
        icon: 'trash',
        handler: () => {
          this.delete(index)
        }
      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel'
      }]
    });
    await actionSheet.present();
  }

  async delete(index){
    var id = this.books[index].id
    await this._bookHttp.borrar(id).toPromise()
    var currentIndex = this._session.books.indexOf(this.books[index])
    this._session.books.splice(currentIndex, 1)
    this.books = this._session.books.filter(item => {
      return item['author_FK'].id == this.authorId
    })
  }


  search(event){
    this.searchText = event.detail.value
  }

  goToNewBook(){
    var parametros = {
      queryParams:{
        'idAutor': this.authorId
      }
    }
    this._router.navigate(['/new-book'],parametros)
  }

}
