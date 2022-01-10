import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatWithMeComponent } from './chat-with-me.component';

describe('ChatWithMeComponent', () => {
  let component: ChatWithMeComponent;
  let fixture: ComponentFixture<ChatWithMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatWithMeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatWithMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
