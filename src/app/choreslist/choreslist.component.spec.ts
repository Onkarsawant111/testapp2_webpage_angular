import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoreslistComponent } from './choreslist.component';

describe('ChoreslistComponent', () => {
  let component: ChoreslistComponent;
  let fixture: ComponentFixture<ChoreslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChoreslistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChoreslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
