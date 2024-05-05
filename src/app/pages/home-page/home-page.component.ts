import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import {ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/all';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  scroll:boolean=false
  constructor() { 
    gsap.registerPlugin(TextPlugin,ScrollTrigger); 
  }

  ngOnInit(): void {
    gsap.from('.hero-section',{
      scrollTrigger:{
        trigger:".hero-section",
        start:"12% 11%",
        end:"5% 5%",
        // markers:true,
        onEnterBack:()=>{
          
          this.scroll = false;
          console.log("scrolled Back",this.scroll);
          
        },
        // markers:true,
        onUpdate:()=>{
          this.scroll=true;
          console.log("scrolled",this.scroll);
          
        }
      }
    })
    this.textAnimation()
  }
  textAnimation(){
    const tl = gsap.timeline({repeat:0,yoyo:true})
    tl.to("#text1",{
      duration:3, text:"INNOVATE, CREATE and ELEVATE with",
     })
    .to("#text2",{
      duration:1  , text:"PROJECT NOVUS",
      color:"yellow"
    })
    .set(".callToAction",{text: "Get Started"})
    .to(".callToAction",{
      opacity:1,
      padding:'10px',
      })
  }

}
