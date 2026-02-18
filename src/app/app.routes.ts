import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => Home
    },
    {
        path: 'about',
        loadComponent: () => About
    },
    {
        path: "contact",
        loadComponent: () => Contact
    }

];
