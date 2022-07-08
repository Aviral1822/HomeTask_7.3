import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ActiveCompComponent } from './active-comp.component';

describe('ActiveCompComponent', () => {
  let component: ActiveCompComponent;
  let fixture: ComponentFixture<ActiveCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  it('should have a card-title ', () => {
    //expect(component.user.id).toBe('Six user');
    
    const mycardtitle = fixture.debugElement.query(By.css('.card-title')).nativeElement;
    expect(mycardtitle.innerHTML.length).toBeGreaterThan(0);
  });

});
