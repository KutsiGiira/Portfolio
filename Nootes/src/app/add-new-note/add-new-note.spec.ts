import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewNote } from './add-new-note';

describe('AddNewNote', () => {
  let component: AddNewNote;
  let fixture: ComponentFixture<AddNewNote>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNewNote]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewNote);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
