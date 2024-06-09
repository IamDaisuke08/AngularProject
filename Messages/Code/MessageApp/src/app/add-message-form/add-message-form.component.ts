import { Component, OnInit, Input } from '@angular/core';
import { MessageItem } from '../../shared/models/messageItem';
import { FormsModule } from '@angular/forms';
import { CountryItem } from '../../shared/models/countryItem';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'add-message-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-message-form.component.html',
  styleUrl: './add-message-form.component.css'
})
export class AddMessageFormComponent implements OnInit {
  @Input() countries : CountryItem[] = [];

  countryCode!: string;
  title! : string;
  message! : string;
  startDate! : Date;
  endDate! : Date;

  constructor(private route : Router) {}

  ngOnInit(): void {
  }

  addNewMessage() {
    let message = new MessageItem(0, this.countryCode, this.title, this.message, this.startDate, this.endDate, false);
    console.log(message);
  }
  
  backToMain() {
    this.route.navigate(['']);
  }
}
