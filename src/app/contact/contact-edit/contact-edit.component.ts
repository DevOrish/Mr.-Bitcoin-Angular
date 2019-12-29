import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from 'src/services/contact.service';
import { UtilService } from 'src/services/utils.service';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit {

  contact = null
  constructor(private route: ActivatedRoute, private router: Router, private contactService: ContactService, private utilService: UtilService, ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')
    if (id) {
      this.contactService.getContactById(id).subscribe(contact => {
        this.contact = {...contact}
      })

    }
    else this.contact = {
      name: '',
      phone: '',
      email: ''
    }
  }
  saveContact(ev) {
    ev.preventDefault()
    this.contactService.saveContact(this.contact)
    this.utilService.showToast('Contact saved successfully!', 'success')
    this.router.navigate(['contact'])
  }
}
