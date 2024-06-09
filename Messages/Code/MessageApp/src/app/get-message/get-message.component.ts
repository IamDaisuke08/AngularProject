import { Component, Input, OnInit } from '@angular/core';
import { CountryItem } from '../../shared/models/countryItem';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MessageApiService } from '../../shared/services/message-api.service';
import { CountryService } from '../../shared/services/country.service';

@Component({
  selector: 'get-message',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './get-message.component.html',
  styleUrl: './get-message.component.css'
})
export class GetMessageComponent implements OnInit {
  
  //countries! : CountryItem[];
  @Input() countries : CountryItem[] = [];

  countryCode!: string;
  messageDate!: Date;
  messageText : string = '';

  constructor(private messageService : MessageApiService, private countryService : CountryService) { }

  ngOnInit(): void {
    // this.countryService.getCountries().subscribe((countries : any) => {
    //   this.countries = countries;
    // },
    // (error : any) => {
    //   alert(error.message);
    // });
  }

  GetMessage() {
    this.messageService.getMessage(this.countryCode, this.messageDate).subscribe((text : any) => {
      this.messageText = text;
    },
    (error : any) => {
      console.log(error.message);
    });
  }
}
