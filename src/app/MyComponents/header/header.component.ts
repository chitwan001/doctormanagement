import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  showoptions(){
    var elem = document.getElementById('useroptions') as HTMLElement;
    if(elem.style.display == 'none'){
      elem.style.display = "grid";
    }
    else{
      elem.style.display = "none";
    }
  }
  // global(){
  //   var elem = document.getElementById('useroptions') as HTMLElement;
  //   document.addEventListener('click',function(e:any){
  //     var useropt = document.getElementById('useroptions') as HTMLElement;
  //     if(!useropt.contains(e.target)){
  //       elem.style.display = 'none';
  //     }

  //   })
  // }
}
