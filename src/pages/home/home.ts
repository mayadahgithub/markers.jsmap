import { Component,ViewChild ,ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AboutPage } from '../about/about';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


declare var google;


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('map') mapElement:ElementRef;
  map: any;
  ///////////
 
  constructor(public navCtrl: NavController, public navParams: NavParams,private http:Http) {

  }

  ionViewDidLoad() {
    this.displayGoogleMap();
   this.getmarkers();
  } 

  displayGoogleMap(){
    let latLng = new google.maps.LatLng(33.803685,44.573364);//33.803685,44.573364//33.773349,45.149451
   let mapOption={
     center:latLng,
     zoom:12,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map=new google.maps.Map(this.mapElement.nativeElement,mapOption);
 }

getmarkers(){
  this.http.get('assets/data/markers.json').map((res)=>res.json()).subscribe(data=>{
    this.addMarkersMap(data);
  });
}
addMarkersMap(markers){
for(let marker of markers){
  var loc ={lat:marker.latitude , lng:marker.longitude}
  marker=new google.maps.Marker({
    position :loc,
    map : this.map,
    title:marker.name,
    label:marker.content
   // label2: marker. addrees
  });
 
}
}


goToDetail(){
  this.navCtrl.push  ( AboutPage)
}


}
 