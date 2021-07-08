import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  rowHeight: number = 500;

  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        this.rowHeight = 250;
        return [
          { title: 'The Lord Barbershop', cols: 2, rows: 1, content: 'Barbearia' },
          { title: 'The Lord Privé', cols: 2, rows: 1, content: 'Barbearia' },
        ];
      }

      return [
        { title: 'The Lord Barbershop', cols: 1, rows: 1, content: 'Barbearia' },
        { title: 'The Lord Privé', cols: 1, rows: 1, content: 'Barbearia' },
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
  }

  /**
   * Scroll to a given HTML Element
   * @param element - HTML Element
   */
  scroll(element: HTMLElement): void {
    element.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  openReservations(): void {
    
  }

  storeClicked(element: any): void {
    console.log(element);
  }
}
