import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Staff, Store } from 'src/app/data/stores';
import { DataService } from 'src/app/services/data/data.service';

// Swiper
import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types/swiper-options';
import { register } from 'swiper/element/bundle';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  @ViewChild("swiper", { static: false }) swiper?: ElementRef<{ swiper: Swiper }>

  storeRoute: any;

  currentStore!: Store;
  currentStaff: Staff[] = [];

  galleryImages: string[] = [
    'assets/barbearia.png', 'assets/barbearia2.png', 'assets/barbearia3.png', 'assets/barbearia4.png'
  ];

  // https://swiperjs.com/swiper-api#modules
  swiperConfig: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: { clickable: true },
    navigation: true,
    autoplay: { delay: 3000 },
    breakpoints: {
      // when window width is >= 480px
      480: {
        slidesPerView: 2
      },
      // when window width is >= 1024px
      1024: {
        slidesPerView: 3
      }
    },
    on: {
      init() {}
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

  ngAfterViewInit() {
    this.swiperInitConfig();
  }

  swiperInitConfig(): void {
    register();
    if (this.swiper?.nativeElement) {
      Object.assign(this.swiper?.nativeElement, this.swiperConfig);
    }
    // @ts-ignore
    setTimeout(() => this.swiper?.nativeElement.initialize());
  }

  populateStaff(): void {
    this.currentStaff.push(
      {
        name: "Tiago Azevedo",
        position: "Barbeiro & CEO",
        description: "Sample text here",
        picture: "assets/staff/tiago_azevedo.png"
      },
    )
    this.currentStaff.push(
      {
        name: "Tiago Maia",
        position: "Barbeiro",
        description: "Sample text here",
        picture: "assets/staff/tiago_maia.png"
      },
    )
    this.currentStaff.push(
      {
        name: "Tiago Azevedo",
        position: "Barbeiro & CEO",
        description: "Sample text here",
        picture: "assets/staff/tiago_azevedo.png"
      },
    )
  }
}
