import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'move-list',
    template: `
        <ul class="move-list">
            <li *ngFor="let move of moves">
            <p>Transfered {{move.amount}} BTC to {{move.to}} at {{move.at | date : "d/M/yy HH:mm"}}</p>
            </li>
        </ul>
  `,
    styleUrls: ['./home.component.scss']

})
export class MoveList implements OnInit {
    @Input() moves
    at = null
    constructor() { }

    ngOnInit() {
    }

}
