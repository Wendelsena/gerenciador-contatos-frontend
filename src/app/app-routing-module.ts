import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactList } from './components/contact-list/contact-list';
import { ContactDetail } from './components/contact-detail/contact-detail';

const routes: Routes = [
  { path: '', component: ContactList },
  { path: 'contato/:id', component: ContactDetail },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
