import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppProductList } from './app-product-list/app-product-list.component';
import { BillComponent } from './bill/bill.component';
import { SVGComponent } from './learn-svg/svg.component';
import { MyComponent } from './my/my.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PlayAudioComponent } from './play-audio/play-audio.component';

const routes: Routes = [
  { path: '', redirectTo: 'app-product-list', pathMatch: 'full'},
  { 
    path: 'app-product-list', 
    component: AppProductList,
    children: [
      { path: 'bill', component: BillComponent },
    ]
  },
  { path: 'play-audio', component: PlayAudioComponent },
  { path: 'learn-svg', component: SVGComponent },
  { path: 'my', component: MyComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
