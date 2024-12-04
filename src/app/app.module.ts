import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { NamePipe } from './name.pipe';
import { HoverHighlightDirective } from './directives/hover-highlight.directive';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';
<<<<<<< Updated upstream
import { HttpClientModule } from "@angular/common/http";
=======
import { PChildComponent } from './p-child/p-child.component';
import { PParentComponent } from './p-parent/p-parent.component';
>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    NamePipe,
    HoverHighlightDirective,
    ParentComponent,
    ChildComponent,
    PChildComponent,
    PParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
