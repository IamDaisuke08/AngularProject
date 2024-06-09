import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageItem } from '../../shared/models/messageItem';
import { CountryItem } from '../../shared/models/countryItem';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'message-filter',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './message-filter.component.html',
  styleUrl: './message-filter.component.css'
})
export class MessageFilterComponent implements OnInit {

  @Input() filter: any;
  @Output() filterChange = new EventEmitter<any>();

  @Input() countries : CountryItem[] = [];

  listFilter : string = 'AAA';

  constructor() { }

  ngOnInit() : void {
    this.updateFilter('AAA');
  }

  updateFilter(value: any) {
    if (value == 'AAA') {
      this.filter = () => 1 == 1;
    } else {
      this.filter = (message : MessageItem) => message.countryCode == value;
    }

    this.filterChange.emit(this.filter);
  }

}
