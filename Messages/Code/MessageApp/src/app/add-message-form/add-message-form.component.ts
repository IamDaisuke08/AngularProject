import { Component, OnInit, Input } from '@angular/core';
import { MessageItem } from '../../shared/models/messageItem';
import { FormsModule } from '@angular/forms';
import { CountryItem } from '../../shared/models/countryItem';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CountryService } from '../../shared/services/country.service';
import { MessageApiService } from '../../shared/services/message-api.service';

@Component({
  selector: 'add-message-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-message-form.component.html',
  styleUrl: './add-message-form.component.css'
})
export class AddMessageFormComponent implements OnInit {
  countries! : CountryItem[];
  countryCode!: string;
  title! : string;
  message! : string;
  startDate! : Date;
  endDate! : Date;

  constructor(private route : Router, private countryService : CountryService, private messageService : MessageApiService) {}

  ngOnInit(): void {
    this.countryService.getCountries().subscribe((countries : any) => {
      this.countries = countries;
    },
    (error : any) => {
      alert(error.message);
    });
  }

  addNewMessage() {
    let message = new MessageItem(0, this.countryCode, this.title, this.message, this.startDate, this.endDate, false);
    console.log(message);
    this.messageService.addMessage(message).subscribe(() => {
    },
    (error : any) => {
      alert(error.message);
    },
    () => {
      this.backToMain();
    });
  }
  
  backToMain() {
    this.route.navigate([''])
      .then(() => {
        window.location.reload();
      });
  }
}
