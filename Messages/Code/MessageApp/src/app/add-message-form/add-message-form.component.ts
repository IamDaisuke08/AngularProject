import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MessageItem } from '../../shared/models/messageItem';
import { FormsModule } from '@angular/forms';
import { CountryItem } from '../../shared/models/countryItem';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'add-message-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-message-form.component.html',
  styleUrl: './add-message-form.component.css'
})
export class AddMessageFormComponent implements OnInit {
  @Input() countries : CountryItem[] = [];

  constructor() {}

  ngOnInit(): void {
  }

  addNewMessage() {
    // this.addMessage.emit(new MessageItem(
    //   0, 
    //   this.countryCode, 
    //   this.title, 
    //   this.message, 
    //   this.startDate, 
    //   this.endDate));
  }
}
