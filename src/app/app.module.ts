import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LeftComponentComponent } from './left-component/left-component.component';
import { RightComponentComponent } from './right-component/right-component.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'note/:id', component: RightComponentComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftComponentComponent,
    RightComponentComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
