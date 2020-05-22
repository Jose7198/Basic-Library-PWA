import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from 'src/app/services/session/session.service';
import { BookHttpService } from 'src/app/services/book-http/book-http.service';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.page.html',
  styleUrls: ['./new-book.page.scss'],
})
export class NewBookPage implements OnInit {

  name
  icbn
  pageNumber
  editorialName
  publicationDate
  edition
  authorId

  constructor(private readonly _activatedRoute : ActivatedRoute,
    private readonly _session : SessionService,
    private readonly _router : Router,
    private readonly _bookHttp : BookHttpService) { }

  ngOnInit() {
    var param$ = this._activatedRoute.queryParams
    param$.subscribe(
      (parametros) =>{
        this.authorId = parametros.idAutor
      }
    )
  }

  async newBook(form){
    const body = {
      icbn : this.icbn,
      name : this.name,
      pageNumber : this.pageNumber,
      editorialName : this.editorialName,
      author_FK : this.authorId,
      publicationDate : this.publicationDate.substring(0,10),
      edition : this.edition
    }
    try{
      const newAuthor$ = await this._bookHttp
        .crear(body)
        .toPromise()
      this._session.books.push(newAuthor$)
      this._router.navigate(
        ['/books'],
        {
          queryParams:{
            'idAutor': this.authorId
          }
        }
      )
    }catch(error){
      console.log(error)
    }
  }

}
