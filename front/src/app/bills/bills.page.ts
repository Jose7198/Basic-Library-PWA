import { Component, OnInit } from '@angular/core';
import { Bill } from '../dto/Bill';
import { BillHttpService } from '../services/bill-http/bill-http.service';
import { SessionService } from '../services/session/session.service';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.page.html',
  styleUrls: ['./bills.page.scss'],
})
export class BillsPage implements OnInit {

  bills : Bill[] = []
  searchText = ''

  constructor(private readonly _session: SessionService) { }

  ngOnInit() {
    this.bills = this._session.bills
  }

  search(event){
    this.searchText = event.detail.value
  }

}
