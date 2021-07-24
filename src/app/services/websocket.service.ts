import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  public socketStatus = false;
  public user:User;

  constructor(
    private socket: Socket
  ) {
    this.checkStatus();
  }

  getUser() {
    return this.user;
  }

    checkStatus() {

      this.socket.on('connect', () => {
        console.log('Conectado al servidor');
        this.socketStatus = true;
      });

      this.socket.on('disconnect', () => {
        console.log('Desconectado del servidor');
        this.socketStatus = false;
      });
    }


    emit( evento: string, payload?: any, callback?: Function ) {

      console.log('Emitiendo', evento);
      // emit('EVENTO', payload, callback?)
      this.socket.emit( evento, payload, callback );

    }

    listen( evento: string ) {
      return this.socket.fromEvent( evento );
    }

    loginWS( name: string ) {
      return new Promise(  (resolve, reject) => {
        this.emit( 'user-config', { name }, resp => {

          this.user = new User( name );
          console.log(this.user);
          this.saveStorage();

          resolve();

        });
      });

    }

    saveStorage() {
      localStorage.setItem( 'user', JSON.stringify( this.user ) );
    }

}
