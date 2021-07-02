import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function(){
      const burger = document.querySelector('.three_lines');
      const nav = document.querySelector('.nav_menu');
      const navOptions = document.querySelectorAll('.nav_menu li')
      console.log(navOptions)

      burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active');
        navOptions.forEach((link,index) => {
          if(nav.classList.contains('nav-active')){
            let style = `animation:navOptFadeAnimation 0.5s ease forwards ${index / 7 + 0.5}s;`
            link.setAttribute('style', style)
          }else{
            link.setAttribute('style', '')
          }
        })
      })
    })
  }

}
