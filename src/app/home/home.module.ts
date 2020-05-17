import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  MatIconModule,
  MatCardModule,
  MatMenuModule,
  MatButtonModule,
  MatChipsModule,
  MatListModule,
  MatInputModule,
  MatRippleModule,
  MatSlideToggleModule,
  MatDialogModule,
  MatSnackBarModule
 } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NguCarouselModule } from '@ngu/carousel';
import { HomeRoutes } from './home.routing';
import { HeaderComponent } from './header/header.component';
import { IntroOneComponent } from './intro-one/intro-one.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ServicesComponent } from './services/services.component';
import { CtaComponent } from './cta/cta.component';
import { PricingsComponent } from './pricings/pricings.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { PortfolioCarouselComponent } from './portfolio-carousel/portfolio-carousel.component';
import { TestimonialsCarouselComponent } from './testimonials-carousel/testimonials-carousel.component';
import { ServicesCarouselComponent } from './services-carousel/services-carousel.component';
// import { WINDOW_PROVIDERS } from '../../helpers/window.helper';
import { HomeComponent } from './home.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';
import { ServiceSummaryComponent } from './service-summary/service-summary.component';
import { TruncateModule } from 'ng2-truncate';
import { FeatureComponent } from './about/feature.component';
import { VideoComponent } from './video/video.component';
import {CommonDirectivesModule} from '../directives/common/common-directives.module';
import {WINDOW_PROVIDERS} from "../helpers/window.helper";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    MatChipsModule,
    MatInputModule,
    MatListModule,
    MatRippleModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    FlexLayoutModule,
    NguCarouselModule,
    CommonDirectivesModule,
    MatDialogModule,
    TruncateModule,
    RouterModule.forChild(HomeRoutes)
  ],

  entryComponents: [
    ServiceDetailComponent
  ],
  declarations: [
    HomeComponent,
    HeaderComponent,
    IntroOneComponent,
    PortfolioComponent,
    ServicesComponent,
    CtaComponent,
    PricingsComponent,
    ContactComponent,
    FooterComponent,
    TestimonialsComponent,
    PortfolioCarouselComponent,
    TestimonialsCarouselComponent,
    ServicesCarouselComponent,
    ServiceDetailComponent,
    ServiceSummaryComponent,
    FeatureComponent,
    VideoComponent
  ],
  providers: [WINDOW_PROVIDERS]

})
export class HomeModule { }
