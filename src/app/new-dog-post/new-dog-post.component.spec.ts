import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDogPostComponent } from './new-dog-post.component';

describe('NewDogPostComponent', () => {
  let component: NewDogPostComponent;
  let fixture: ComponentFixture<NewDogPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDogPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDogPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
