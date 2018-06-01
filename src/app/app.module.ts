// angular components:
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// third-party components:
import {
  MatGridListModule,
  MatFormFieldModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatInputModule,
  MatTabsModule,
  MatDialogModule
} from '@angular/material';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

// in-house components:
import { TopNavComponent } from './top-nav/top-nav.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InteractionDialogComponent } from './interaction-dialog/interaction-dialog.component';
import { AuthService } from './services/auth/auth.service';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [AppComponent, DashboardComponent, TopNavComponent, InteractionDialogComponent],
  imports: [
    // third-party modules:
    BrowserModule.withServerTransition({ appId: 'owlio' }),
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    MatGridListModule,
    MatDialogModule,
    MatFormFieldModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    MatInputModule,
    InfiniteScrollModule
    // in-house modules:
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
  entryComponents: [InteractionDialogComponent]
})
export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string
  ) {
    const platform = isPlatformBrowser(platformId)
      ? 'in the browser'
      : 'on the server';
    console.log(`Running ${platform} with appId=${appId}`);
  }
}
