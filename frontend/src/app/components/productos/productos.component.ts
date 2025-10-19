import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; // ✅ importa Router
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos: any[] = [];

  // ✅ inyecta Router correctamente
  constructor(
      private productosService: ProductosService,
      private router: Router
  ) {}

  ngOnInit(): void {
    this.productosService.getAll().subscribe({
      next: (data: any) => (this.productos = data),
      error: (err: any) => console.error('Error al obtener productos:', err)
    });
  }

  eliminarProducto(id: number) {
    if (confirm('¿Seguro que deseas eliminar este producto?')) {
      this.productosService.delete(id).subscribe({
        next: () => {
          alert('Producto eliminado correctamente ✅');
          this.ngOnInit();
        },
        error: err => console.error('Error al eliminar producto:', err)
      });
    }
  }

  editarProducto(producto: any) {
    console.log('Editando producto:', producto); // 👈 prueba en consola
    this.router.navigate(['/editar', producto.id]); // ✅ ahora sí funciona
  }
}
