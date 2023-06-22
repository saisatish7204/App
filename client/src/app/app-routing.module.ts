import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { AuthGuard } from './_helpers';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const usersModule = () => import('./users/users.module').then(x => x.UsersModule);
const workReportModule = () => import('./_modules/work-report/work-report.module').then(x => x.WorkReportModule);
const uploadModule = () => import('./_modules/upload/upload.module').then(x => x.UploadModule);
const downloadModule = () => import('./_modules/download/download.module').then(x => x.DownloadModule);

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'users', loadChildren: usersModule, canActivate: [AuthGuard] },
    { path: 'work-report', loadChildren: workReportModule, canActivate: [AuthGuard] },
    { path: 'upload', loadChildren: uploadModule, canActivate: [AuthGuard] },
    { path: 'download', loadChildren: downloadModule, canActivate: [AuthGuard] },
    { path: 'account', loadChildren: accountModule },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }