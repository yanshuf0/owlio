import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-interaction-dialog',
  templateUrl: './interaction-dialog.component.html',
  styleUrls: ['./interaction-dialog.component.scss']
})
export class InteractionDialogComponent implements OnInit {
  username = '';
  password = '';

  constructor(
    private authService: AuthService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {}

  async login() {
    try {
      const response: any = await this.authService
        .login(this.username, this.password)
        .toPromise();
      this.snackBar.open('Successfully logged in!', 'dismiss', {
        duration: 2000
      });
    } catch (e) {
      this.snackBar.open(e.error.message, 'dismiss', {
        duration: 2000
      });
    }
  }
}
