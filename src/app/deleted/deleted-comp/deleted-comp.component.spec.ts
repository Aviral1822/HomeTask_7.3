import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DeletedCompComponent } from './deleted-comp.component';

describe('DeletedCompComponent', () => {
  let component: DeletedCompComponent;
  let fixture: ComponentFixture<DeletedCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletedCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletedCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have content in button class ', () => {
    const mybtt= fixture.debugElement.query(By.css('.btn')).nativeElement;
    expect(mybtt.innerHTML).not.toBeNull();
    // console.log(board.innerHTML)
    expect(mybtt.innerHTML.length).toBeGreaterThan(0);
  });

});
