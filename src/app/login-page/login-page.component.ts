import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import{HelperserviceService} from '../helperservice.service'


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  username = new FormControl('',Validators.required);
  constructor(private router: Router,private helper:HelperserviceService ) { }

  ngOnInit(): void {

  }
  submit(){
    if(this.username.valid){
this.helper.setUserName(this.username.value)
this.router.navigateByUrl('inventory')
    }
  }

}
