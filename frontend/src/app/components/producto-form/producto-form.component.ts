import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-producto-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.css']
})
export class ProductoFormComponent {
  producto = {
    nombre: '',
    precio: null,
    stock: null
  };

  constructor(
    private productosService: ProductosService,
    private router: Router
  ) {}

  crearProducto(): void {
    if (!this.producto.nombre || !this.producto.precio || !this.producto.stock) {
      alert('Por favor completa todos los campos');
      return;
    }

    this.productosService.create(this.producto).subscribe({
      next: () => this.router.navigate(['/productos']),
      error: err => console.error('Error al crear producto:', err)
    });
  }
}
