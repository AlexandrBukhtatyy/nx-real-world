import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {FrontendUiModule, NotFoundComponent, NotFoundModule} from '@rwa/frontend/ui';

const routes: Routes = [
  {
    path: 'catalog',
    loadChildren: () => import('./pages/catalog/catalog.module').then((m) => m.CatalogModule),
  },
  {
    path: 'info',
    loadChildren: () => import('./pages/info/info.module').then((m) => m.InfoModule),
  },
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {initialNavigation: 'enabledBlocking'}),
    FrontendUiModule,
    NotFoundModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
