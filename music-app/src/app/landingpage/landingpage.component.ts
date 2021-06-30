import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  constructor() {
    
   }
  
  ngOnInit(): void {
    const btn = document.getElementById("bar_btn");
    if(btn)
      btn.addEventListener("click", toggle);
    function toggle(){
      const a = document.getElementById("list");
      if(a)
        a.classList.toggle("active");
      // console.log("*");
    }
  }
  

}
