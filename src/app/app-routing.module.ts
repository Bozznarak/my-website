import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HerzuhrComponent } from './components/herzuhr/herzuhr.component';
import { SchachuhrComponent } from './components/schachuhr/schachuhr.component';

const routes: Routes = [
  { path: 'liebe', component: HerzuhrComponent },
  { path: 'schachuhr', component: SchachuhrComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
