import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Apollo, gql } from 'apollo-angular';

export const Userlogin = gql`
  mutation login($user: SignupOrLoginInput!) {
    login(user: $user) {
      token
      user {
        id
        username
        firstName
        lastName
        isVerified
        uiPreferences
        outreachCircleCodes
        allowAccessToOrganization
        __typename
      }
      __typename
    }
  }
`;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private apollo : Apollo){

  }
  reactiveForm : FormGroup
  emailError = null
  emailValidation = "invalid email error"
  passwordError = "";
  loading: string;
  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      username : new FormControl(null , [Validators.required , Validators.email]) ,
      password : new FormControl(null , Validators.required)
    })
  }

  handleText(value : string){
    if (value == 'username') {
      this.emailValidation = null
      this.emailError = 'This field is manadatory';
    } else if (value == 'password') {
      this.passwordError = 'This field is manadoarty';
    }
    
  }

  handleForm(){

    this.loading = 'loading..';
    this.apollo.mutate<any>({
      mutation : Userlogin ,
      variables : {
        user: {
          username: this.reactiveForm.value.username,
          password: this.reactiveForm.value.password,
        }
      }
    }).subscribe(
      ({ data }) => {
        this.loading = '✓';
        setTimeout(() => {
          console.log(data)
        }, 1000);
      },
      (error) => {
        this.loading = null;
        if (error.message.includes('email id')) {
          this.emailValidation = null
          this.emailError =
            'Email address does not exist. Do you want to Sign-up?';
        } else if (error.message.includes('password')) {
          this.passwordError =
            'The password you entered is invalid. Please try again.';
        }
      }
    );
  }
}
