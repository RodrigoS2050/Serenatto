import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CardsComponent } from './cards.component';

describe('CardsComponent', () => {
  let component: CardsComponent;
  let fixture: ComponentFixture<CardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardsComponent],
    });
    fixture = TestBed.createComponent(CardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct number of cards', () => {
    const cards = fixture.nativeElement.querySelectorAll('.card');
    expect(cards.length).toBe(component.cards.length);
  });

  it('should display the correct card title and description', () => {
    const cardElements = fixture.debugElement.queryAll(By.css('.card'));

    for (let i = 0; i < component.cards.length; i++) {
      const card = component.cards[i];
      const titleElement = cardElements[i].query(By.css('.card-title'));
      const descriptionElement = cardElements[i].query(By.css('.card-text'));

      expect(titleElement.nativeElement.textContent.trim()).toBe(card.title);
      expect(descriptionElement.nativeElement.textContent.trim()).toBe(
        card.description
      );
    }
  });

  it('should open Offcanvas when button is clicked', () => {
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    fixture.detectChanges();
    const offcanvas = fixture.nativeElement.querySelector('.offcanvas');
    expect(offcanvas).toBeTruthy();
  });

  it('should display the correct accordion title and description', () => {
    const accordionElements = fixture.debugElement.queryAll(
      By.css('.offcanvas')
    );

    for (let i = 0; i < component.accordions.length; i++) {
      const accordion = component.accordions[i];
      const accordionElement = accordionElements[i];

      const titleElement = accordionElement.query(By.css('.offcanvas-title'));
      expect(titleElement.nativeElement.textContent.trim()).toBe(
        accordion.title
      );

      const firstButtonElement = accordionElement.query(
        By.css('[data-bs-target="#collapseOne"]')
      );
      expect(firstButtonElement.nativeElement.textContent.trim()).toBe(
        accordion.firstBtn
      );

      const firstDescElement = accordionElement.query(
        By.css('#collapseOne .accordion-body')
      );
      expect(firstDescElement.nativeElement.textContent.trim()).toBe(
        accordion.firstDesc
      );

      const secondButtonElement = accordionElement.query(
        By.css('[data-bs-target="#collapseTwo"]')
      );
      expect(secondButtonElement.nativeElement.textContent.trim()).toBe(
        accordion.secondBtn
      );

      const secondDescElement = accordionElement.query(
        By.css('#collapseTwo .accordion-body')
      );
      expect(secondDescElement.nativeElement.textContent.trim()).toBe(
        accordion.secondDesc
      );

      if (accordion.thirdBtn) {
        const thirdButtonElement = accordionElement.query(
          By.css('[data-bs-target="#collapseThree"]')
        );
        expect(thirdButtonElement.nativeElement.textContent.trim()).toBe(
          accordion.thirdBtn
        );

        const thirdDescElement = accordionElement.query(
          By.css('#collapseThree .accordion-body')
        );
        expect(thirdDescElement.nativeElement.textContent.trim()).toBe(
          accordion.thirdDesc
        );
      }
    }
  });
});
