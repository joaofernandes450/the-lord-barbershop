import { Component, HostListener } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { DataService } from 'src/app/services/data/data.service';
import { MatDialog } from '@angular/material/dialog';
import { ReservationDialogComponent } from '../reservation-dialog/reservation-dialog.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  sidenavOpen: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let element = document.querySelector('.navigation-bar') as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('scrolled');
    } else {
      element.classList.remove('scrolled');
    }
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, public dataService: DataService, private dialog: MatDialog) {
  }

  openSidenavEvent(): void {
    this.sidenavOpen = true;
    const element = document.querySelector('.navigation-bar') as HTMLElement;
    element.classList.add('open');
  }

  closeSidenavEvent(): void {
    this.sidenavOpen = false;
    const element = document.querySelector('.navigation-bar') as HTMLElement;
    element.classList.remove('open');
  }

  openReservations(): void {
    const dialogRef = this.dialog.open(ReservationDialogComponent);

    dialogRef.afterClosed().subscribe(() => {
    });
  }
}
