import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: '',
        loadChildren: () => import('../app/pages/home/home.routes').then((m) => m.HOME_ROUTES)
    },
];
