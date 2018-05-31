import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
  animations: [
    trigger('menuState', [
      state('inactive', style({
        transform: 'translateX(0)',
      })),
      state('active',   style({
        transform: 'translateX(-20rem)',
      })),
      transition('inactive => active', animate('700ms ease-in')),
      transition('active => inactive', animate('700ms ease-out'))
    ])
  ]
})
export class TopNavComponent implements OnInit {
  mState = 'inactive';

  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    this.mState = this.mState === 'active' ? 'inactive' : 'active';
  }

}
