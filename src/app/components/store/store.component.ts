import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Staff, Store } from 'src/app/data/stores';
import { DataService } from 'src/app/services/data/data.service';

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  Swiper
} from 'swiper/core';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  storeRoute: any;

  currentStore!: Store;
  currentStaff: Staff[] = [];

  galleryImages: string[] = [
    'assets/barbearia.png', 'assets/barbearia2.png', 'assets/barbearia3.png', 'assets/barbearia4.png'
  ];

  // https://swiperjs.com/swiper-api#modules
  swiperConfig: any = {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: { clickable: true },
    navigation: true,
    autoplay: { delay: 3000 },
    breakpoints: {
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      // when window width is >= 1024px
      1024: {
        slidesPerView: 3,
        spaceBetween: 10
      },
    }
  }

  constructor(private activatedRoute: ActivatedRoute, private dataService: DataService) {
    this.activatedRoute.paramMap.subscribe(params => {
      this.storeRoute = params.get('store');
    })
  }

  ngOnInit(): void {
    this.populateStaff();
    this.currentStore = this.dataService.getStores().find(x => x.route === this.storeRoute)!;
  }

  populateStaff(): void {
    this.currentStaff.push(
      {
        name: "Tiago Azevedo",
        position: "Barbeiro & CEO",
        description: "Sample text here",
        picture: "/assets/staff/tiago_azevedo.png"
      },
    )
    this.currentStaff.push(
      {
        name: "Tiago Maia",
        position: "Barbeiro",
        description: "Sample text here",
        picture: "/assets/staff/tiago_maia.png"
      },
    )
    this.currentStaff.push(
      {
        name: "Tiago Azevedo",
        position: "Barbeiro & CEO",
        description: "Sample text here",
        picture: "/assets/staff/tiago_azevedo.png"
      },
    )
  }

  onSwiper(swiper: any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

}
