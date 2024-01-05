import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from 'express';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  

  contact! :contact;
  ngOnInit(): void {
    this.contact={
      firstName:'',
      email:'',
      Address:{city:'',street:'',pincode:''}

    }
  }



  onSubmit(contactForm:NgForm){
    console.log(contactForm.value)

    // console.log(form.value)  //get form data use '.value'
  }
}


class contact{
  firstName!:string;
  email!:string;
  
  Address!:{
    city:string;
    street:string;
    pincode:string
}

}
