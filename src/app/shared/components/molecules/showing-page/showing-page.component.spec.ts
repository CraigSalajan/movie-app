import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowingPageComponent } from './showing-page.component';

describe('ShowingPageComponent', () => {
  let component: ShowingPageComponent;
  let fixture: ComponentFixture<ShowingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowingPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
