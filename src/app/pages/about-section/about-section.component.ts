import { AfterViewInit, Component, OnInit } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.scss']
})
export class AboutSectionComponent implements OnInit,AfterViewInit {

  constructor() { 
    gsap.registerPlugin(ScrollTrigger)
  }
  ngAfterViewInit(): void {
    
  }
  
  ngOnInit(): void {
    this.cardAnimation('.card-1',1);
    this.cardAnimation('.card-2',2);
    this.cardAnimation('.card-3',3);
    this.cardAnimation('.card-4',4);
  }
  cardAnimation(cardNumber:string,duration:number) {
   gsap.from(`${cardNumber}`,{
      scrollTrigger:{
        trigger:'.second-about-section',
        start:'60% center',
        end: '70% center',
        // markers:true
      },
      y:100,
      opacity:0,
      duration:duration
    })
  }
}
