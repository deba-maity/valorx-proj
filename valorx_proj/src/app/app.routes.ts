import { Routes } from '@angular/router';
import { ChildComponent } from './components/child/child.component';
import { ParentComponent } from './components/parent/parent.component';

export const routes: Routes = [
  { path: '', redirectTo: '/parent', pathMatch: 'full' }, // Redirect to parent by default
  { path: 'parent', component: ParentComponent },
  { path: 'child', component: ChildComponent },
];
