import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from 'src/app/data/stores';
import { DataService } from 'src/app/services/data/data.service';
import { ReservationDialogComponent } from '../reservation-dialog/reservation-dialog.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  availableStores: Store[] = [];

  constructor(private router: Router, private dataService: DataService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.availableStores = this.dataService.getStores();
  }

  /**
   * Scroll to a given HTML Element
   * @param element - HTML Element
   */
  scroll(element: HTMLElement): void {
    element.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
  }

  openReservations(): void {
    const dialogRef = this.dialog.open(ReservationDialogComponent);

    dialogRef.afterClosed().subscribe(() => {
    });
  }

  openStore(store: Store): void {
    return;
    this.router.navigate(['/' + store.route])
  }
}
