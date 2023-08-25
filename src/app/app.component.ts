import {Component, OnInit} from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

import { image1, image2, image3, image4 } from '../assets/images';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  
  ngOnInit(): void {
   
  }

  title = 'Catalog Viewer';

  checked: boolean = false;
  counter$: Observable<number>;
  
  catalogsList = [
    {
      thumb: image1,
      image: image1
    },
    {
      thumb: image2,
      image: image2
    },
    {
      thumb: image3,
      image: image3
    },
    {
      thumb: image4,
      image: image4
    }
  ]

  activeIndex: number = 0;
  slideDuration = 3000;
  idInterval;

  selectedCatalog(index: number) {
    this.activeIndex = index;
    this.catalogsList[index];
  }

  nextItem(item){
    if(this.catalogsList.length - 1 == item){
      this.activeIndex = 0;
    }else{
      this.activeIndex = item + 1;
    }
  }

  previousItem(item){
    if(item == 0){
      this.activeIndex = this.catalogsList.length - 1;
    }else{
      this.activeIndex = item - 1; 
    }
   
  }

  // this.nextItem(this.activeIndex)
  async checkBox(){
    this.checked = !this.checked;
    if(this.checked){
      this.starSlideShow();
      /* this.idInterval = setInterval(() => {
        this.nextItem(this.activeIndex); 
      }, this.slideDuration); */
    }else{
      this.stopSlideShow();
      /*  clearInterval(this.idInterval); */
    }
    
   }

   
   slideShowSubject = new Subscription();

   starSlideShow(){
   // this.slideShowSubject = timer(0, this.slideDuration).subscribe(n => this.nextItem(this.activeIndex));
      this.slideShowSubject = interval(this.slideDuration).subscribe(n => this.nextItem(this.activeIndex));
   }

   stopSlideShow(){
     if(this.slideShowSubject) this.slideShowSubject.unsubscribe();
   }

}
