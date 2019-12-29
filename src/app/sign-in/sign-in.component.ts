import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';
import Swal from 'sweetalert2'
import { UtilService } from 'src/services/utils.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(private userService: UserService, private utilService: UtilService, private router: Router) { }
  
  ngOnInit() {
  }

  name = null

  login(ev) {
    ev.preventDefault()
    var user = this.userService.checkLogin(this.name)
    if (!user) {
      Swal.fire({
        title: 'No user found',
        text: `Would you like to create this user?`,
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: 'gold',
        cancelButtonColor: 'gray',
        confirmButtonText: 'Create'
      }).then((result) => {
        if (result.value) {
          user = this.userService.signUp(this.name)
          this.utilService.showToast('User created successfully!', 'success')
          this.router.navigate(['home'])
        }
      })
    }
    if (user) this.router.navigate(['home'])
  }

}
