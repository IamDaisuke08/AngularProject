import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MessageItem } from '../../shared/models/messageItem';
import { MessageApiService } from '../../shared/services/message-api.service';
import { CountryItem } from '../../shared/models/countryItem';
import { CountryService } from '../../shared/services/country.service';
import { FormsModule } from '@angular/forms';
import { MessageListComponent } from '../message-list/message-list.component';
import { MessageFilterComponent } from '../message-filter/message-filter.component';
import { EventService } from '../../shared/services/EventService';
import { Router } from '@angular/router';
import { GetMessageComponent } from '../get-message/get-message.component';

@Component({
  selector: 'app-message-main',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, MessageListComponent, MessageFilterComponent, GetMessageComponent],
  templateUrl: './message-main.component.html',
  styleUrl: './message-main.component.css'
})
export class MessageMainComponent implements OnInit {
  messages: MessageItem[] = [];
  countries : CountryItem[] = [];

  filter: any = ()=>{};

  constructor(private messageService : MessageApiService, private countryService : CountryService, private events : EventService, private route : Router) { 
    this.events.listen('deleteMessage', (messageId) => {
      this.messageService.deleteMessage(messageId).subscribe(() => {
      },
      (error : any) => {
        console.log(error.message);
        this.loadMessages();
      },
      () => {
        this.loadMessages();
      });
    });

    this.events.listen('saveMessage', (message: MessageItem) => {
      this.messageService.updateMessage(message).subscribe(() => {
      },
      (error : any) => {
        console.log(error.message);
        this.loadMessages();
      },
      () => {
        this.loadMessages();
        message.onEditMode = false;
      });
    });
  }

  ngOnInit(): void {
    this.countryService.getCountries().subscribe((countries : any) => {
      this.countries = countries;
      this.loadMessages();
    },
    (error : any) => {
      alert(error.message);
    });
  }

  loadMessages() {
    this.messageService.getMessages().subscribe((messages : any) => {
      this.messages = messages;
    },
    (error : any) => {
      alert(error.message);
    });
  }

  gotoAddNew() {
    this.route.navigate(['add']);
  }
}
