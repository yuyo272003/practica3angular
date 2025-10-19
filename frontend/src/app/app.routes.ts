import { Routes } from '@angular/router';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductoFormComponent } from './components/producto-form/producto-form.component';
import {EditarProductoComponent} from './components/editar-producto/editar-producto.component';

export const routes: Routes = [
  { path: '', redirectTo: 'productos', pathMatch: 'full' },
  { path: 'productos', component: ProductosComponent },
  { path: 'nuevo', component: ProductoFormComponent },
  { path: 'editar/:id', component: EditarProductoComponent },
  { path: '**', redirectTo: '' }
];
