import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session/session.service';
import { ShopCartService } from '../services/shop-cart/shop-cart.service';
import { IsLoggedService } from '../services/is-logged/is-logged.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage implements OnInit {

  books
  cart
  name
  ruc
  address
  phoneNumber
  email
  totalCost
  cashier

  constructor(private readonly _session : SessionService,
    private readonly _shoppingCart : ShopCartService,
    private readonly _isLogged: IsLoggedService,
    private readonly _location : Location) { }

  ngOnInit() {
    this.books = this._session.books
    this.cart = this._shoppingCart.detalleCarrito
    this.totalCost = this._shoppingCart.costoTotal[0]
    this.cashier = this._isLogged.user.userName
  }

  addToCart(index){
    this._shoppingCart.insertarAlCarrito(this.books[index])
  }

  removeFromCart(item){
    this._shoppingCart.quitarCarrito(item)
  }

  shop(form){
    const shop = {
      'name': this.name,
      'ruc': this.ruc,
      'address' : this.address,
      'phoneNumber' : this.phoneNumber,
      'email' : this.email,
      'cashier' : this.cashier,
    }
    this._shoppingCart.finalizarCompra(shop)
    this._location.back()
  }

}
