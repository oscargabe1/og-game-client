import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { Subscription } from 'rxjs';
import { User } from '../../models/user';
import { UserService } from 'src/app/services/user.service';
//import { UserData } from '../../interfaces/user-data';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {

  texto = '';
  mensajesSubscription: Subscription;
  elemento: HTMLElement;

  mensajes: any[] = [];



  constructor(
    public chatService: ChatService,
    public userService: UserService
  ) { }

  ngOnInit() {


    this.elemento = document.getElementById('chat-mensajes');

    this.mensajesSubscription = this.chatService.getMessages().subscribe( msg => {

      this.mensajes.push( msg );

      setTimeout(() => {
        this.elemento.scrollTop = this.elemento.scrollHeight;
      }, 50);

    });

  }

  ngOnDestroy() {
    this.mensajesSubscription.unsubscribe();
  }


  enviar() {

    if ( this.texto.trim().length === 0 ) {
      return;
    }

    this.chatService.sendMessage( this.texto );
    this.texto = '';
  }

  logoff(){
    console.log("logoff");
    this.userService.logoff();
  }

}
