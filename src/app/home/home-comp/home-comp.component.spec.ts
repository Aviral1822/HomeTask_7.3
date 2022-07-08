import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCompComponent } from './home-comp.component';
import { By } from '@angular/platform-browser';
describe('HomeCompComponent', () => {
  let component: HomeCompComponent;
  let fixture: ComponentFixture<HomeCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



  it('should have content in your header', () => {
    const myhead= fixture.debugElement.query(By.css('.head1')).nativeElement;
    expect(myhead.innerHTML).not.toBeNull();
    // console.log(board.innerHTML)
    expect(myhead.innerHTML.length).toBeGreaterThan(0);
  });
});
