import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
private user : any = {};
  constructor(private  route : Router,private http : HttpClient) { }

  ngOnInit() {

  }

  checkLogin(){
console.log('The data is ',this.user)
this.http.post("http://localhost:3000/api",this.user).subscribe(
  (res)=>{
    var t1 = JSON.stringify(res);
    var t2 = JSON.parse(t1);
    localStorage.setItem('token',t2.message);
console.log('The response is ',res)
this.route.navigate(['/home'])
  },
  (err)=>{
console.log('The eror is ',err)
  }
)


  }

}
