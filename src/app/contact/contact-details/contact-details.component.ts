import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/services/contact.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/services/user.service';
import { UtilService } from 'src/services/utils.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {
  loggedInUser = null
  contact = null
  amount = null
  movesToContact = null

  constructor(private contactService: ContactService, private userService: UserService, private utilService: UtilService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')
    this.contactService.getContactById(id).subscribe(contact => {
      this.contact = contact
    })
    this.loggedInUser = this.userService.getUser()
    this.movesToContact = this.loggedInUser.moves.filter(move => {
      return move.toId === this.contact._id
    })
  }

  removeContact(id) {
    Swal.fire({
      title: 'Are you sure?',
      text: `You want to remove ${this.contact.name} from your contacts?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: 'gray',
      confirmButtonText: 'Remove'
    }).then((result) => {
      if (result.value) {
        this.contactService.removeContact(id)
        this.utilService.showToast('Contact removed successfully!', 'success')
        this.router.navigate(['contact'])
      }
    })
  }

  transferBtc(ev, amount) {
    ev.preventDefault()
    if (!Number.isInteger(+amount)) {
      return this.utilService.showToast('Only numbers please!', 'error')
    }
    const user = this.userService.addMove(this.contact, +amount)
    if (!user) return
    this.utilService.showToast('BTC\'s transferred successfully!', 'success')
    this.router.navigate(['contact'])
  }

}
