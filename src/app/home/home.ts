import { Component } from '@angular/core';
import { APP_NAME } from '../app.constants';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  appName = APP_NAME;
}
