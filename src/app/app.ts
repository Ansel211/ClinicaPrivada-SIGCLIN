import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  vistaActual = 'login'; // Estados: 'login', 'recuperar', 'dashboard'

  irARecuperar() {
    this.vistaActual = 'recuperar';
  }

  volverAlLogin() {
    this.vistaActual = 'login';
  }

  iniciarSesion(event: Event) {
    event.preventDefault(); // Evita que la pagina intente cargar un backend inexistente
    this.vistaActual = 'dashboard';
  }
}