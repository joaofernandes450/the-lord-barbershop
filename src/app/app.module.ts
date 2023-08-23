import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';

//FontAwesome Icons

//Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';

//Community Modules
import { SwiperModule } from 'swiper/angular';

//Components
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FooterComponent } from './components/footer/footer.component';
import { StoreComponent } from './components/store/store.component';
import { RouterModule } from '@angular/router';
import { ReservationDialogComponent } from './components/reservation-dialog/reservation-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomepageComponent,
    FooterComponent,
    StoreComponent,
    ReservationDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatDialogModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
