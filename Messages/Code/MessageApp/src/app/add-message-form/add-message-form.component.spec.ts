import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMessageFormComponent } from './add-message-form.component';

describe('AddMessageFormComponent', () => {
  let component: AddMessageFormComponent;
  let fixture: ComponentFixture<AddMessageFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddMessageFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMessageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
