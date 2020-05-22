import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IsLoggedService } from './services/is-logged/is-logged.service';
import { GuardService } from './services/guard/guard.service';
import { PrincipalHttpService } from './services/http-principal/principal-http.service';
import { UserHttpService } from './services/user-http/user-http.service';
import { PipesModule } from './pipes/pipes.module';
import { AuthorHttpService } from './services/author-http/author-http.service';
import { BookHttpService } from './services/book-http/book-http.service';
import { SessionService } from './services/session/session.service';
import { ShopCartService } from './services/shop-cart/shop-cart.service';
import { BillHttpService } from './services/bill-http/bill-http.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    PipesModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    IsLoggedService,
    GuardService,
    UserHttpService,
    PrincipalHttpService,
    AuthorHttpService,
    BookHttpService,
    SessionService,
    ShopCartService,
    BillHttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
