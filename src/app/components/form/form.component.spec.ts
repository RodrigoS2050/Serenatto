import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormComponent } from './form.component';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  let formElement: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormComponent],
    });
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    formElement = document.getElementById('contact');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the form elements', () => {
    const formElement = fixture.nativeElement.querySelector('#contact');
    expect(formElement).toBeTruthy();

    const usernameInput =
      fixture.nativeElement.querySelector('#floatingUsername');
    expect(usernameInput).toBeTruthy();

    const emailInput = fixture.nativeElement.querySelector('#floatingEmail');
    expect(emailInput).toBeTruthy();

    const phoneInput = fixture.nativeElement.querySelector('#floatingPhone');
    expect(phoneInput).toBeTruthy();

    const preferenceSelect = fixture.nativeElement.querySelector('select');
    expect(preferenceSelect).toBeTruthy();

    const satisfactionInput = fixture.nativeElement.querySelector(
      '#level-satisfaction'
    );
    expect(satisfactionInput).toBeTruthy();

    const newsletterCheckbox =
      fixture.nativeElement.querySelector('#flexCheckDefault');
    expect(newsletterCheckbox).toBeTruthy();

    const submitButton = fixture.nativeElement.querySelector('button');
    expect(submitButton).toBeTruthy();
  });

  it('should set the default preference select option', () => {
    const preferenceSelect = fixture.nativeElement.querySelector('select');
    expect(preferenceSelect.value).toBe('Preferência de contato:');
  });

  it('should update the preference select value', () => {
    const preferenceSelect = formElement.querySelector('select');
    preferenceSelect.value = '2'; // Email option
    preferenceSelect.dispatchEvent(new Event('change'));
    expect(preferenceSelect.value).toBe('2');
  });

  it('should update the satisfaction level', () => {
    const satisfactionInput = formElement!.querySelector('#level-satisfaction');
    satisfactionInput!.value = '7';
    satisfactionInput!.dispatchEvent(new Event('input'));
    expect(satisfactionInput.value).toBe('7');
  });

  it('should toggle the newsletter checkbox', () => {
    const newsletterCheckbox = formElement.querySelector('#flexCheckDefault');
    newsletterCheckbox.click();
    expect(newsletterCheckbox.checked).toBe(true);
    newsletterCheckbox.click();
    expect(newsletterCheckbox.checked).toBe(false);
  });
});
