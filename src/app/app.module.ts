import { environment } from './../environments/environment.prod';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TaskState } from './task-state';
import {MatListModule} from '@angular/material/list'; 
import {MatCheckboxModule} from '@angular/material/checkbox'; 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCheckboxModule,
    NgxsModule.forRoot([TaskState], {
      developmentMode: !environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
