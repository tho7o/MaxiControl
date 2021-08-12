//Importar modulos del router de angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Guards
import { UserGuard } from './services/user.guard';

//Components
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AddnewrecordComponent } from './components/addnewrecord/addnewrecord.component';
import { BreastfeedingComponent } from './components/breastfeeding/breastfeeding.component';
import { DiappersComponent } from './components/diappers/diappers.component';
import { ErrorComponent } from './components/error/error.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'new', component: AddnewrecordComponent, canActivate:[UserGuard] },
  { path: 'breastfeeding', component: BreastfeedingComponent, canActivate:[UserGuard] },
  { path: 'diappers', component: DiappersComponent, canActivate:[UserGuard] },
  { path: '**', component: ErrorComponent }
];

declare module "@angular/core" {
    interface ModuleWithProviders<T = any> {
        ngModule: Type<T>;
        providers?: Provider[];
    }
}

export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);