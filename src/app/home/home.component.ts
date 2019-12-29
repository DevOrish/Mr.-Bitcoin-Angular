import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/services/user.service';
import { BitcoinService } from 'src/services/bitcoin.service';
import { User } from 'src/app/models/User';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  loggedInUser: User = null
  rate: Number = null
  rateSub: Subscription
  constructor(private userService: UserService, private bitcoinService: BitcoinService) { }

  ngOnInit() {
    this.loggedInUser = this.userService.getUser()
    this.rateSub = this.bitcoinService.getRate()
      .subscribe((rate: Number) => this.rate = rate)
  }
  ngOnDestroy() {
    this.rateSub.unsubscribe();
  }

}

//If i wanted to user async pipe I could do :

// ngOnInit() {
//   this.loggedInUser = this.userService.getUser()
//   this.rateSubscription = this.bitcoinService.getRate()
// }

//And then just render {{rateSubscription | async}}