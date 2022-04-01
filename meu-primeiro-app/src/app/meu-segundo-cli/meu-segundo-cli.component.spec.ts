import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuSegundoCliComponent } from './meu-segundo-cli.component';

describe('MeuSegundoCliComponent', () => {
  let component: MeuSegundoCliComponent;
  let fixture: ComponentFixture<MeuSegundoCliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeuSegundoCliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeuSegundoCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
