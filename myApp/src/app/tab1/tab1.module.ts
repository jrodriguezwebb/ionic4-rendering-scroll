import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { IonicImageLoader } from 'ionic-image-loader';
import {MatCardModule} from '@angular/material/card';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    IonicImageLoader,
    MatCardModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }]),
    ScrollingModule
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
