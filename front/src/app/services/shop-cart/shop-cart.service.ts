import { Injectable } from '@angular/core';
import { BillHttpService } from '../bill-http/bill-http.service';
import { Bill } from 'src/app/dto/Bill';

@Injectable({
  providedIn: 'root'
})
export class ShopCartService {

  detalleCarrito = []

  constructor(private readonly _billHttp : BillHttpService) { }

  costoTotal = [{
    'carrito': this.detalleCarrito,
    'precioTotal': 0
  }] 

  insertarAlCarrito(producto){
    var indiceItem = -1
    const existeEnElCarrito = this.detalleCarrito.some((item,indice)=>{
      if(item.producto == producto){
        indiceItem = indice
        return true
      }else{
        return false
      }
    })
    if(existeEnElCarrito){
      this.aumentarContador(indiceItem)
    }else{
      this.agregarAlCarrito(producto)
    }
    this.calcularTotal()
    return this.detalleCarrito
  }

  private aumentarContador(indice){
    this.detalleCarrito[indice].cantidad ++
  }

  private agregarAlCarrito(producto){
    var toInsert = {
      'producto': producto,
      'cantidad': 1
    }
    this.detalleCarrito.push(toInsert)
  }

  quitarCarrito(producto){
    var indiceItem = -1
    var cantidad = 0 
    this.detalleCarrito.forEach((item,indice)=>{
      if(item.producto == producto){
        indiceItem = indice
        cantidad = item.cantidad
      }
    })
    if(cantidad == 1){
      this.eliminarDelCarrito(indiceItem)
    }else{
      this.reducirCantidad(indiceItem)
    }
    this.calcularTotal()
    return this.detalleCarrito
  }

  private eliminarDelCarrito(indice){
    this.detalleCarrito.splice(indice,1)
  }

  private reducirCantidad(indice){
    this.detalleCarrito[indice].cantidad --
  }

  private calcularTotal(){
    var costo = 0
    this.detalleCarrito.forEach((item)=>{
      costo += (item.cantidad * 50)
    })
    this.costoTotal[0].precioTotal = costo
  }

  private generateDetail() : string{
    var detail = ''
    this.detalleCarrito.forEach(item =>{
      detail = `${detail} ${item.producto.name} x${item.cantidad}\n`
    })
    return detail
  }

  async finalizarCompra(cliente){
    var venta : Bill =
      {
        'name':cliente.name,
        'ruc':cliente.ruc,
        'address' : cliente.address,
        'phoneNumber' : cliente.phoneNumber,
        'email' : cliente.email,
        'cashier' : cliente.cashier,
        'detail' : this.generateDetail(), 
        'total':this.costoTotal[0].precioTotal
      }
    console.log(venta)
    await this._billHttp.crear(venta).toPromise()
    this.detalleCarrito = []
    this.costoTotal = [{
      'carrito': this.detalleCarrito,
      'precioTotal': 0
    }] 
  }
}
