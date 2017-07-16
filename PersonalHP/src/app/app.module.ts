import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentCComponent } from './content-c/content-c.component';
import { OffsiteIconComponent } from './content-c/offsite-icon/offsite-icon.component';
import { SeachBarComponent } from './content-c/seach-bar/seach-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentCComponent,
    OffsiteIconComponent,
    SeachBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
