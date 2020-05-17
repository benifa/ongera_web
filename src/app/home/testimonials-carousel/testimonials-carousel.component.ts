import { Component, OnInit, Input } from '@angular/core';
import { NguCarousel } from '@ngu/carousel';

@Component({
  selector: 'app-testimonials-carousel',
  templateUrl: './testimonials-carousel.component.html',
  styleUrls: ['./testimonials-carousel.component.scss']
})
export class TestimonialsCarouselComponent implements OnInit {
  @Input('backgroundGray') public backgroundGray;
  public carouselOptions: NguCarousel;
  public testimonials = [
    {
      logo: 'assets/images/mock-logo-4.png',
      photo: 'assets/images/face-1.jpg',
      text: `“I’ve tried using different softwares. The computer is not my strong side.
      There is excellent support behind DevEgret and people to walk you through it.
      If you have any questions they’ll go over that and explain to you how to do that. ”`,
      title: 'Jean Jacques Karatwa',
      subtitle: 'CEO'
    },
    {
      logo: 'assets/images/mock-logo-4.png',
      photo: 'assets/images/face-1.jpg',
      text: `“I’ve tried using different softwares. The computer is not my strong side.
      There is excellent support behind DevEgret and people to walk you through it.
      If you have any questions they’ll go over that and explain to you how to do that. ”`,
      title: 'Janvier Regos',
      subtitle: 'Product Manager'
    },
    {
    logo: 'assets/images/mock-logo-4.png',
    photo: 'assets/images/face-1.jpg',
    text: `“I’ve tried using different softwares. The computer is not my strong side.
    There is excellent support behind DevEgret and people to walk you through it.
    If you have any questions they’ll go over that and explain to you how to do that. ”`,
    title: 'Fabrice BENIMANA',
    subtitle: 'CTO'
  }]
  constructor() { }

  ngOnInit() {
    this.carouselOptions = {
      grid: { xs: 1, sm: 2, md: 3, lg: 3, all: 0 },
      slide: 2,
      speed: 400,
      interval: 4000,
      point: {
        visible: true
      },
      load: 2,
      touch: true,
      loop: true
    }
  }

}
