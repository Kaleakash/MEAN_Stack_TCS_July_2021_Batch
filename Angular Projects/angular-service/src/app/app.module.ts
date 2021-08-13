import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FakeService } from './fake.service';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { HttpClientModule } from '@angular/common/http';
import { FakeComponent } from './fake/fake.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    FakeComponent
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [FakeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
