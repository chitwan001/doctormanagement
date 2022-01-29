import { Component, OnInit } from '@angular/core';
import { GetdataService } from 'src/app/getdata.service';

@Component({
  selector: 'app-usermain',
  templateUrl: './usermain.component.html',
  styleUrls: ['./usermain.component.css']
})
export class UsermainComponent implements OnInit {

  constructor(private getdoctor : GetdataService) { }
  resulteddocs:any;
  ngOnInit(): void {
    this.getdoctors();
  }
  getdoctors(){
    this.getdoctor.getdoctors().subscribe(data => {
      console.log(data);
      this.resulteddocs = data;
    })
  }
}
