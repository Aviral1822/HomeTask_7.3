import { ComponentFixture, TestBed,async } from '@angular/core/testing';

import { ManageCompComponent } from './manage-comp.component';

describe('ManageCompComponent', () => {
  let component: ManageCompComponent;
  let fixture: ComponentFixture<ManageCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call func() "onselect" ', async(() => {
    spyOn(component, 'onSelect');
  
    let button = fixture.debugElement.nativeElement.querySelector('.btn');
    button.click();
  
    fixture.whenStable().then(() => {
      expect(component.onSelect).toHaveBeenCalled();
    });
  }));

});



/*


*/