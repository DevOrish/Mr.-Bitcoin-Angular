import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContactService } from 'src/services/contact.service';
import { Contact } from '../models/Contact';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy {
  contactsSub: Subscription = null
  contacts: Contact[] = null
  filteredContacts: Contact[] = null
  filter = null
  constructor(private contactService: ContactService) {
  }

  get contactsToShow() {
    if (!this.filter) this.filteredContacts = this.contacts
    else this.filteredContacts = this.contacts.filter(contact => {
      return contact.name.toLowerCase().includes(this.filter.toLowerCase())
    })
    return this.filteredContacts
  }

  ngOnInit() {
    this.contactsSub = this.contactService.getContacts()
      .subscribe((contacts: Contact[]) => this.contacts = contacts)

  }

  ngOnDestroy() {
    this.contactsSub.unsubscribe()
  }


}
