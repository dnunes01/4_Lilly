import { Component } from '@angular/core';
import { APP_NAME, APP_TAGLINE, APP_PHONE, APP_HOURS, APP_EMAIL } from '../app.constants';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  appName = APP_NAME;
  tagline = APP_TAGLINE;
  phone = APP_PHONE;
  hours = APP_HOURS;
  email = APP_EMAIL;
}