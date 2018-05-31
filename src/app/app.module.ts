import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {
  MatGridListModule,
  MatFormFieldModule,
  MatCardModule,
  MatMenuModule, MatIconModule, MatButtonModule, MatToolbarModule, MatInputModule
} from '@angular/material';
import { TopNavComponent } from './top-nav/top-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TopNavComponent,
  ],
  imports: [
    // third-party modules:
    BrowserModule.withServerTransition({ appId: 'owlio' }),
    MatGridListModule,
    MatFormFieldModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    // in-house modules:
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string) {
    const platform = isPlatformBrowser(platformId) ?
      'in the browser' : 'on the server';
    console.log(`Running ${platform} with appId=${appId}`);
  }
}
