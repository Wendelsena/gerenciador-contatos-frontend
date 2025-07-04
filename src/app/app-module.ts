import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HttpClientModule } from '@angular/common/http';
import { ContactList } from './components/contact-list/contact-list';
import { ContactForm } from './components/contact-form/contact-form';
import { ContactDetail } from './components/contact-detail/contact-detail';

@NgModule({
  declarations: [
    App,
    ContactList,
    ContactForm,
    ContactDetail
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
