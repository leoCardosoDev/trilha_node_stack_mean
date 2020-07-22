import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { PostlistComponent } from './postlist/postlist.component';
import { PostcreateComponent } from './postcreate/postcreate.component';

const appRoutes: Routes = [
  { 
    path: '', 
    component: PostlistComponent
  }, 
  {
    path: 'new',
    component: PostcreateComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PostlistComponent,
    PostcreateComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    UiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
