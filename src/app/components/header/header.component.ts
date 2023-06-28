import { AfterViewInit, Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  inputCheck: any;
  body: any;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.inputCheck = document.querySelector('#dark-mode');
    this.body = document.querySelector('body');
    this.inputCheck.addEventListener('click', () => {
      const mode = this.inputCheck.checked ? 'dark' : 'light';
      this.renderer.setAttribute(this.body, 'data-bs-theme', mode);
    });
  }
}
