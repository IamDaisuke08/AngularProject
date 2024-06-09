import { Component, OnInit, Input } from '@angular/core';
import { MessageItem } from '../../shared/models/messageItem';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CountryItem } from '../../shared/models/countryItem';
import { EventService } from '../../shared/services/EventService';

@Component({
  selector: 'message-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './message-list.component.html',
  styleUrl: './message-list.component.css'
})
export class MessageListComponent implements OnInit {

  @Input() messages : MessageItem[] = [];
  @Input() countries : CountryItem[] = [];

  constructor(private events : EventService) { }
  
  ngOnInit(): void {
  }

  onEdit(message: MessageItem) {
    this.messages.forEach(m => {
      m.onEditMode = false;
    });
    message.onEditMode = !message.onEditMode;
  }

  onCancelEdit(message: MessageItem) {
    message.onEditMode = false;
  }

  deleteMessage(messageId: number) {
    this.events.emit('deleteMessage', messageId);
  }

  saveMessage(message: MessageItem) {
    this.events.emit('saveMessage', message);
  }
}
