import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { RouterModule, Routes } from '@angular/router';

import { ThePaintingProcessComponent } from './pages/the-painting-process/the-painting-process.component';
import { PictureComponent } from './pages/picture/picture.component';
import { LandingComponent } from './pages/landing/landing.component';
import { AboutComponent } from './pages/about/about.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { LanguageService } from './services/language.service';
import { SideMenuService } from './services/side-menu.service';
import { TranslateComponent } from './components/translate/translate.component';
import { LanguageSwitchComponent } from './components/language-switch/language-switch.component';

import { SwiperModule } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { ContactComponent } from './pages/contact/contact.component';
import { ImpressumComponent } from './pages/impressum/impressum.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ServicesComponent } from './pages/services/services.component';

const SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto',
  keyboardControl: true
};

const appRoutes: Routes = [
  { path: 'the-painting-process', component: ThePaintingProcessComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'picture/:id', component: PictureComponent },
  { path: '**', component: LandingComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ThePaintingProcessComponent,
    PictureComponent,
    LandingComponent,
    AboutComponent,
    SideMenuComponent,
    TranslateComponent,
    LanguageSwitchComponent,
    ContactComponent,
    ImpressumComponent,
    PrivacyComponent,
    GalleryComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot( appRoutes ),
    SwiperModule.forRoot(SWIPER_CONFIG)
  ],
  providers: [
    LanguageService,
    SideMenuService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
