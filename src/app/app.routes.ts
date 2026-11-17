import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'dashboard',
        loadComponent: () => import('./dashboard-web/pages/dashboard-page/dashboard-page')
    }
    ,

    {
        path: '**',
        redirectTo: 'dashboard'

    }
];
