import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamDashboardPageComponent } from './team-dashboard-page.component';

describe('TeamDashboardPageComponent', () => {
  let component: TeamDashboardPageComponent;
  let fixture: ComponentFixture<TeamDashboardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamDashboardPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamDashboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
