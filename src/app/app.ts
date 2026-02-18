import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { APP_NAME, TAB_TEXT } from './app.constants';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  appName = APP_NAME;

  constructor(private title: Title) {
    this.title.setTitle(TAB_TEXT);
  }
}