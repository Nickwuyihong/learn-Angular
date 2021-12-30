import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppTopBarComponent } from './app-top-bar/app-top-bar.component';
import { AppProductList } from './app-product-list/app-product-list.component';
import { AppBottomBarComponent } from './app-bottom-bar/app-bottom-bar.component';
import { BillComponent } from './bill/bill.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SVGComponent } from './learn-svg/svg.component';
import { MyComponent } from './my/my.component';
import { Ishiyoniikuikuiku } from './ishiyoniikuikuiku.pipe';
import { HttpClientModule } from '@angular/common/http';
import { SwiperModule } from 'swiper/angular';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { PlayAudioComponent } from './play-audio/play-audio.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AppTopBarComponent,
    AppProductList,
    AppBottomBarComponent,
    BillComponent,
    SVGComponent,
    NotFoundComponent,
    MyComponent,
    Ishiyoniikuikuiku,
    PlayAudioComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SwiperModule,
    FormsModule
  ],
  exports: [Ishiyoniikuikuiku],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
