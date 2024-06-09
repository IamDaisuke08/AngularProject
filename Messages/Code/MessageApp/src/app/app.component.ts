import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MessageItem } from '../shared/models/messageItem';
import { MessageApiService } from '../shared/services/message-api.service';
import { CountryItem } from '../shared/models/countryItem';
import { CountryService } from '../shared/services/country.service';
import { FormsModule } from '@angular/forms';
import { MessageListComponent } from './message-list/message-list.component';
import { MessageFilterComponent } from './message-filter/message-filter.component';
import { EventService } from '../shared/services/EventService';
import { AddMessageFormComponent } from './add-message-form/add-message-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, MessageListComponent, MessageFilterComponent, AddMessageFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  messages: MessageItem[] = [];
  countries! : CountryItem[];

  filter: any;

  constructor(private messageService : MessageApiService, private countryService : CountryService, private events : EventService) { 
    this.events.listen('deleteMessage', (messageId) => {
      this.messageService.deleteMessage(messageId).subscribe(() => {
        // show delete confirmation...
        this.loadMessages();
      });
    });

    this.events.listen('saveMessage', (message: MessageItem) => {
      this.messageService.updateMessage(message).subscribe(() => {
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
}
