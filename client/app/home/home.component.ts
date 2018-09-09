import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route : Router,private http : HttpClient) { }

  ngOnInit() {
  }

  getUser(){
this.http.get('http://localhost:3000/api/users').subscribe(
  (res)=>{
    console.log('The response is ',res)
  },
  (err)=>{
    console.log('The error is ',err)
  }
)
  }

  logout(){
    localStorage.clear();
    this.route.navigate(['/'])
  }

}
