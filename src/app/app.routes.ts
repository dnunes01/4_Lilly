import { Routes } from '@angular/router';
import { Home } from './home/home';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => Home
    },
    {
        path: 'about',
        loadComponent: () =>
            import('./about/about').then(m => m.About)
    },
    {
        path: "contact",
        loadComponent: () =>
            import('./contact/contact').then(m => m.Contact)
    },
    {
        path: "schedule",
        loadComponent: () =>
            import('./schedule/schedule').then(m => m.Schedule)
    }
];
