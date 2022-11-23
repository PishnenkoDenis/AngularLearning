import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { FeaturesComponent } from './components/features/features.component';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { DeactivateGuard } from './guards/deactivate.guard';
import { HttpResolver } from './services/http.resolver';

const routes: Routes = [
  {path: 'features', component: FeaturesComponent, resolve: {users: HttpResolver}},
  {path: 'about', 
  component: AboutComponent
  },
  {path: 'user', component: UserComponent},
  {path: 'home', component: HomeComponent},
  {path: 'form', component: FormComponent, canDeactivate: [DeactivateGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
