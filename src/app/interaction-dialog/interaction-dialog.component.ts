import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-interaction-dialog',
  templateUrl: './interaction-dialog.component.html',
  styleUrls: ['./interaction-dialog.component.scss']
})
export class InteractionDialogComponent implements OnInit {
  username = '';
  password = '';

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  async login() {
    const response = await this.authService
      .login(this.username, this.password)
      .toPromise();
    console.log(JSON.stringify(response, null, 2));
  }
}
