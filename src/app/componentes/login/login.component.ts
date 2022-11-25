import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  formularioDeRegistro: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router
  ) { 
    this.formularioDeRegistro = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.userService.login(this.formularioDeRegistro.value)
    .then(response => {
      console.log(response);
      this.router.navigate(['/main'])
    })
    .catch(error => console.log(error)
    )
  }
}
