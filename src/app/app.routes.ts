import { Routes } from '@angular/router';
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';

export const routes: Routes = [
    {
        path: '',
        component: AppLayoutComponent,
        children: [
            {
                path: 'home',
                loadComponent: () => import('./features/student/home/home.page').then((m) => m.HomePage),
            },
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full',
            },
        ],
    },
];
