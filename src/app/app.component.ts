import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'the-lord-barbershop';

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const element = document.getElementById('scroll-button');
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      element?.classList.add('show');
    } else {
      element?.classList.remove('show');
    }
  }


  scrollTopOfPage(): void {
    // document.body.scrollTop = document.documentElement.scrollTop = 0;
    window.scrollTo({top: 0, behavior: 'smooth'})
  }
}
