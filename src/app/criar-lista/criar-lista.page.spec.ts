import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CriarListaPage } from './criar-lista.page';

describe('CriarListaPage', () => {
  let component: CriarListaPage;
  let fixture: ComponentFixture<CriarListaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CriarListaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
