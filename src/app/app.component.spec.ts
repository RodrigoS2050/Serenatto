import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { AppComponent } from './app.component';
@Component({ selector: 'app-header', template: '' })
class HeaderComponentStub {}

@Component({ selector: 'app-footer', template: '' })
class FooterComponentStub {}

@Component({ selector: 'app-cards', template: '' })
class CardsComponentStub {}

@Component({ selector: 'app-products', template: '' })
class ProductsComponentStub {}

@Component({ selector: 'app-form', template: '' })
class FormComponentStub {}

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponentStub,
        FooterComponentStub,
        CardsComponentStub,
        ProductsComponentStub,
        FormComponentStub,
      ],
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the app-header component', () => {
    const appHeader = fixture.nativeElement.querySelector('app-header');
    expect(appHeader).toBeTruthy();
  });

  it('should render the app-cards component', () => {
    const appCards = fixture.nativeElement.querySelector('app-cards');
    expect(appCards).toBeTruthy();
  });

  it('should render the app-products component', () => {
    const appProducts = fixture.nativeElement.querySelector('app-products');
    expect(appProducts).toBeTruthy();
  });

  it('should render the app-form component', () => {
    const appForm = fixture.nativeElement.querySelector('app-form');
    expect(appForm).toBeTruthy();
  });

  it('should render the app-footer component', () => {
    const appFooter = fixture.nativeElement.querySelector('app-footer');
    expect(appFooter).toBeTruthy();
  });

  it('should check that the number of headings and the text are correct', () => {
    const element: HTMLElement = fixture.nativeElement;
    const titles = element.querySelectorAll('h2');
    expect(Number(titles.length)).toEqual(3);
    const arraytitles = [
      'Sua pausa para desfrutar a vida.',
      'Portas abertas para todos os públicos.',
      'Momentos especiais em cada xícara.',
    ];
    titles.forEach((title, index) => {
      expect(title.textContent?.trim()).toEqual(arraytitles[index]);
    });
  });

  it('should check that the number of paragraphs and the text are correct', () => {
    const element: HTMLElement = fixture.nativeElement;
    const paragraphs = element.querySelectorAll('p');
    expect(Number(paragraphs.length)).toEqual(3);
    const arrayParagraphs = [
      'Boas-vindas ao & Bistrô Serenatto! Um ambiente aconchegante e acolhedor para apreciar um bom café.',
      'Nosso espaço é aconchegante, pet friendly, preparado para receber crianças, pessoas com deficiência e ambiente para coworking.',
      'Desfrute de momentos únicos no Café & Bistrô Serenatto. Nossa equipe se dedica a proporcionar uma experiência memorável em um ambiente acolhedor.',
    ];
    paragraphs.forEach((paragraph, index) => {
      expect(paragraph.textContent?.trim()).toEqual(arrayParagraphs[index]);
    });
  });
});
