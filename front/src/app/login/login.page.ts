import { Component, OnInit } from '@angular/core';
import { IsLoggedService } from '../services/is-logged/is-logged.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  userName
  password

  constructor(private readonly _isLogged : IsLoggedService,
    private readonly _router : Router,
    public alertController: AlertController) { }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      subHeader: 'Inicio de sesión',
      message: 'Credenciales erroneas',
      buttons: ['OK']
    });

    await alert.present();
  }
  

  async login(form){
    const aux = await this._isLogged.login(this.userName, this.password)
    if(aux){
      this._router.navigate(['/home'])
    }else{
      this.presentAlert()
    }
  }

  ngOnInit() {
  }

}
