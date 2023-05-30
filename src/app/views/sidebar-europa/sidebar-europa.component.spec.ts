import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarEuropaComponent } from './sidebar-europa.component';

describe('SidebarEuropaComponent', () => {
  let component: SidebarEuropaComponent;
  let fixture: ComponentFixture<SidebarEuropaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarEuropaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarEuropaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
