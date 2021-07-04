import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RssFeedTitleListComponent } from './rss-feed-title-list.component';

describe('RssFeedTitleListComponent', () => {
  let component: RssFeedTitleListComponent;
  let fixture: ComponentFixture<RssFeedTitleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RssFeedTitleListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RssFeedTitleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
