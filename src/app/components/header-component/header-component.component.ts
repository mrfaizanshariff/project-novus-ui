import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { gsap } from 'gsap/gsap-core';
@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.scss']
})
export class HeaderComponentComponent implements OnInit,OnChanges {
  @Input() scroll:boolean = false;
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if(this.scroll){
      gsap.to(".nav",{
        color:"black",
        background:"white",
        fontWeight:"bold"
      })
    }else{
      gsap.to(".nav",{
        color:"white",
        background:"transparent",
      
      })
    }
  }

  ngOnInit(): void {
  }

}
