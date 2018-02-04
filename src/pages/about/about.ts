import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

result:any;

  constructor(public navCtrl: NavController,private http:Http) {

  }

  ionViewDidLoad() {  
    this.getmarkers();
  } 

  getmarkers(){
    this.http.get('assets/data/markers.json').map((res)=>res.json()).subscribe(data=>{
      this.result = data;
    });
  }

}
