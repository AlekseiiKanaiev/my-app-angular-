import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {HeroesComponent} from './heroes/heroes.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';

/**Добавляем роуты для перехода
 * На пример: для адреса localhost:4200/heroes будет "преход" на
 * компонент HeroesComponent*/

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'heroes', component: HeroesComponent},
  {path: 'dashboard', component: DashboardComponent},
  // The colon (:) in the path indicates that :id is a placeholder for a specific hero id.
  {path: 'detail/:id', component: HeroDetailComponent}
];

@NgModule({
  imports: [
    CommonModule,
    /**Добавляем модуль RouterModule и настраиваем его на роуты
     *
     *The method is called forRoot() because you configure the
     router at the application's root level.
     The forRoot() method supplies the service providers and
     directives needed for routing, and performs the initial
     navigation based on the current browser URL.*/
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  /**делаем доступным директивы RouterModule в AppModule*/
  exports: [RouterModule]
})
export class AppRoutingModule { }
