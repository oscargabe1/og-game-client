import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
    public wsService: WebsocketService
  ) { }

    sendMessage( mensaje: string ) {

      let userName = localStorage.getItem('username');

      const payload = {
        de: userName || 'Bruh',
        cuerpo: mensaje
      };

      this.wsService.emit('message', payload );

    }

    getMessages() {
      return this.wsService.listen('new-message');
    }

    getUserInfo(){
      return this.wsService.listen('data-assignment');
    }

}
