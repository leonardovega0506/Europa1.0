import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPaqueteEstafetaComponent } from './lista-paquete-estafeta.component';

describe('ListaPaqueteEstafetaComponent', () => {
  let component: ListaPaqueteEstafetaComponent;
  let fixture: ComponentFixture<ListaPaqueteEstafetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPaqueteEstafetaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaPaqueteEstafetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
