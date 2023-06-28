import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the cafeteria logo', () => {
    const logoElement = fixture.nativeElement.querySelector(
      'img[src="assets/logo.png"]'
    );
    expect(logoElement).toBeTruthy();
  });

  it('should display navigation items', () => {
    const navItems = fixture.nativeElement.querySelectorAll('.nav-item');
    expect(navItems.length).toBe(3);
    const homeLink = fixture.nativeElement.querySelector(
      '.nav-link[aria-current="page"]'
    );
    expect(homeLink.textContent).toBe('Início');
    const contactLink = fixture.nativeElement.querySelector(
      '.nav-link[href="#contact"]'
    );
    expect(contactLink.textContent).toBe('Contato');
  });

  it('should open Offcanvas when button is clicked', () => {
    const button = fixture.nativeElement.querySelector('.navbar-toggler-icon');
    button.click();
    fixture.detectChanges();
    const offcanvas = fixture.nativeElement.querySelector('.offcanvas');
    expect(offcanvas).toBeTruthy();
  });

  it('should toggle the dark mode on checkbox click', () => {
    const inputCheck = fixture.nativeElement.querySelector('#dark-mode');
    const body = document.createElement('body');
    document.body.appendChild(body);
    body.setAttribute('data-bs-theme', 'light');
    fixture.detectChanges();
    expect(body.getAttribute('data-bs-theme')).toBe('light');
    inputCheck.click();
    fixture.detectChanges();
    setTimeout(() => {
      expect(body.getAttribute('data-bs-theme')).toBe('dark');
    }, 1000);
  });
});
