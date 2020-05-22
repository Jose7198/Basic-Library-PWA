import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Author } from '../dto/Author';
import { AuthorHttpService } from '../services/author-http/author-http.service';
import { SessionService } from '../services/session/session.service';


@Component({
  selector: 'app-authors',
  templateUrl: './authors.page.html',
  styleUrls: ['./authors.page.scss'],
})
export class AuthorsPage implements OnInit {

  authors : Author[] 
  searchText = ''

  async presentActionSheet(index) {
    const actionSheet = await this.actionSheetController.create({
      header: `${this.authors[index].names} ${this.authors[index].lastNames}`,
      buttons: [{
        text: 'Borrar',
        icon: 'trash',
        handler: () => {
          this.delete(index)
        }
      }, {
        text: 'Ver libros',
        icon: 'book',
        handler: () => {
          this.toProducts(this.authors[index].id)
        }
      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel'
      }]
    });
    await actionSheet.present();
  }

  toProducts(id){
    var parametros = {
      queryParams:{
        'idAutor' : id
      }
    }
    this._router.navigate(['books'],parametros)
  }

  constructor(public actionSheetController: ActionSheetController,
    private readonly _router : Router,
    private readonly _session : SessionService,
    private readonly _authorHttp : AuthorHttpService) {

  }
  
  ngOnInit() {
    this.authors = this._session.authors
  }

  search(event){
    this.searchText = event.detail.value
  }

  async delete(index){
    var id = this.authors[index].id
    await this._authorHttp.borrar(id).toPromise()
    this._session.authors.splice(index, 1)
  }

}
