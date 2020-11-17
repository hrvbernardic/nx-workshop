import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { StoreUiSharedModule } from "@bg-hoard/store/ui-shared";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    MatCardModule,
    StoreUiSharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
