import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetMessageComponent } from './get-message.component';

describe('GetMessageComponent', () => {
  let component: GetMessageComponent;
  let fixture: ComponentFixture<GetMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetMessageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
