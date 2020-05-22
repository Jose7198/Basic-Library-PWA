import { Injectable } from '@angular/core';
import { Author } from 'src/app/dto/Author';
import { AuthorHttpService } from '../author-http/author-http.service';
import { BookHttpService } from '../book-http/book-http.service';
import { BillHttpService } from '../bill-http/bill-http.service';
import { Book } from 'src/app/dto/Book';
import { Bill } from 'src/app/dto/Bill';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  authors : Author[] = []
  books : Book[] = []
  bills : Bill[] = []

  constructor(private readonly _authorHttp : AuthorHttpService,
    private readonly _booksHttp : BookHttpService,
    private readonly _billHttp : BillHttpService) { }

  async chargeData(){
    try {
      this.authors = await this._authorHttp.buscarTodos().toPromise()
      this.books = await this._booksHttp.buscarTodos().toPromise()
      this.bills = await this._billHttp.buscarTodos().toPromise()
    }catch(error){
      console.log('Something went wrong')
    }
  }

}
