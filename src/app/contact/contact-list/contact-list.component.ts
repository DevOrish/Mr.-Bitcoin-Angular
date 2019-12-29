import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactList implements OnInit {
  @Input() contacts
  constructor() { }

  ngOnInit() {    
  }

}
