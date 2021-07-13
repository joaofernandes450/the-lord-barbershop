import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

export interface Store {
  image: string;
  name: string;
  address: string;
  phoneNumber: string;
  email: string;
}

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

  availableStores: Store[] = [];

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {
    this.populateStores();
  }

  ngOnInit(): void {
  }

  /**
   * Populares Stores interfaces
   */
  populateStores(): void {
    const store1: Store = {
      image: "assets/barbearia2.png", name: "The Lord Barbershop", address: "Rua de Bragadela, Loja 24, 4760-706", email: "barberthelord@gmail.com", phoneNumber: "+351 913 484 773"
    }

    const store2: Store = {
      image: "assets/barbearia2.png", name: "The Lord Privé", address: "Avenida Rio Veirão, Loja 17, 4760-715", email: "barberthelord2@gmail.com", phoneNumber: "+351 913 484 773"
    }

    this.availableStores.push(store1, store2);
  }

  /**
   * Scroll to a given HTML Element
   * @param element - HTML Element
   */
  scroll(element: HTMLElement): void {
    element.scrollIntoView({ behavior: 'smooth', block: 'nearest'})
  }

  openReservations(): void {

  }

  openStore(store: Store): void {
    this.router.navigate(['/' + store.name.replace(' ', '-').toLocaleLowerCase()])
  }
}
