import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { DragDropModule } from '@angular/cdk/drag-drop';  
import {
  AdminDashboardModule,
  adminDashboardRoutes,
} from '@nxt/admin/dashboard';
import { MainViewComponent } from './pages/main-view/main-view.component';
import { AppRoutingModule } from './app.routing.module';


@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, MainViewComponent],
  imports: [
    BrowserModule, AppRoutingModule, DragDropModule,
    StoreModule.forRoot(
      {},
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot(),
    AdminDashboardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
