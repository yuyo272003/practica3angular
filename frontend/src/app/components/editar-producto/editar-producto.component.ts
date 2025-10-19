import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  imports: [
    FormsModule
  ],
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {
  producto = { id: 0, nombre: '', precio: 0, stock: 0 };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productosService: ProductosService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productosService.getAll().subscribe((productos) => {
      this.producto = productos.find((p: any) => p.id === id);
    });
  }

  actualizarProducto() {
    this.productosService.update(this.producto.id, this.producto).subscribe({
      next: () => {
        alert('✅ Producto actualizado');
        this.router.navigate(['/productos']);
      },
      error: (err) => console.error('Error al actualizar producto:', err)
    });
  }
}
