import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent],
    });
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct GitHub link', () => {
    const githubLink: HTMLElement = fixture.nativeElement.querySelector(
      '.btn[href="https://github.com/RodrigoS2050"]'
    );
    expect(githubLink).toBeTruthy();
  });

  it('should have correct LinkedIn link', () => {
    const linkedinLink: HTMLElement = fixture.nativeElement.querySelector(
      '.btn[href="https://www.linkedin.com/in/rodrigo-silva-86044a224/"]'
    );
    expect(linkedinLink).toBeTruthy();
  });

  it('should display the correct year and developer text', () => {
    const footerElement: HTMLElement = fixture.nativeElement.querySelector('p');
    expect(footerElement.textContent).toContain('2023');
    expect(footerElement.textContent).toContain('Rodrigo Silva');
    expect(footerElement.textContent).toContain(
      'Projeto fictício sem fins comerciais.'
    );
  });
});
