import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageFilterComponent } from './message-filter.component';

describe('MessageFilterComponent', () => {
  let component: MessageFilterComponent;
  let fixture: ComponentFixture<MessageFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessageFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
