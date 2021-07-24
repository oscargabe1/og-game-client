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

      const payload = {
        de: this.wsService.getUser().name,
        cuerpo: mensaje
      };

      this.wsService.emit('message', payload );

    }

    getMessages() {
      return this.wsService.listen('new-message');
    }

    getUserInfo(){
      console.log("get user info");
      return this.wsService.listen('user-config');
    }

}
