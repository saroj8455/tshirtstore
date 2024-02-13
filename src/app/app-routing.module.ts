import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { CommonFormComponent } from './components/common-form/common-form.component';
import { GridComponent } from './components/grid/grid.component';
import { CodeEditorComponent } from './components/code-editor/code-editor.component';
import { CrudComponent } from './components/crud/crud.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'common-form', component: CommonFormComponent },
  { path: 'grid', component: GridComponent },
  { path: 'editor', component: CodeEditorComponent },
  { path: 'crud', component: CrudComponent },
  { path: 'products', component: ProductsComponent },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
