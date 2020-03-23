import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestcompComponent } from './testcomp/testcomp.component';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TestComponent } from './test/test.component';


const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'calculator',component:TestcompComponent},
  {path:'test',component:TestComponent},
  {path:'currencyconverter',component:CurrencyConverterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
