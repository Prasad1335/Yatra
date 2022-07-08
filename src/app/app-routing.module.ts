import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes =
  [

    { path: '', loadChildren: () => import('./Website/website.module').then(m => m.WebsiteModule) },
    { path: 'admin', loadChildren: () => import('./Admin/admin.module').then(m => m.AdminModule) }

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
