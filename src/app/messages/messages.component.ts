import { Component, OnInit } from '@angular/core';
import {MessagesService} from '../messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  /**Подключаем сервис к компоненту
   * свойство должно быть public, т.к. мы будем его подключать
   * (привязывать) в шаблоне.
   * Ангуляр привязывается только к public свойствам  */
  constructor(public messagesService: MessagesService) { }

  ngOnInit() {
  }

}
