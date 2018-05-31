import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MatDialog, MatDialogRef } from '@angular/material';
import { InteractionDialogComponent } from '../interaction-dialog/interaction-dialog.component';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
  animations: [
    trigger('menuState', [
      state('inactive', style({
        transform: 'translateX(0)',
      })),
      state('active', style({
        transform: 'translateX(-11.5rem)',
      })),
      transition('inactive => active', animate('700ms ease-in')),
      transition('active => inactive', animate('700ms ease-out'))
    ])
  ]
})
export class TopNavComponent implements OnInit {
  dialogRef: MatDialogRef<InteractionDialogComponent>;
  showSearchGlass: boolean;
  mState = 'inactive';
  @ViewChild('searchInput')
  searchInput: ElementRef;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  toggleMenu() {
    this.mState = (this.mState === 'active') ? 'inactive' : 'active';
    if (this.mState === 'active') {
      setTimeout(() => this.searchInput.nativeElement.focus(), 700);
    }

    setTimeout(() => {
      if (this.mState === 'active') {
        this.showSearchGlass = true;
      } else {
        this.showSearchGlass = false;
      }
    }, 500);
  }

  openInteractionDialog() {
    this.dialogRef = this.dialog.open(InteractionDialogComponent);
  }
}
