import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { UtilService } from 'src/services/utils.service';
import { UserService } from 'src/services/user.service';
import { ContactService } from 'src/services/contact.service';
import { BitcoinService } from 'src/services/bitcoin.service';
import { MoveList } from './home/move-list.component';
import { ContactList } from './contact/contact-list/contact-list.component';
import { ContactPreviewComponent } from './contact/contact-preview/contact-preview.component';
import { ContactDetailsComponent } from './contact/contact-details/contact-details.component';
import { ContactEditComponent } from './contact/contact-edit/contact-edit.component';
import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    MoveList,
    ContactList,
    ContactPreviewComponent,
    ContactDetailsComponent,
    ContactEditComponent,
    SignInComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [UtilService, UserService, ContactService, BitcoinService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
