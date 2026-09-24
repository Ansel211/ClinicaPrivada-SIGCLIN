import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {
  vistaActual = 'login'; // Estados: 'login', 'recuperar', 'dashboard'

  irARecuperar() {
    this.vistaActual = 'recuperar';
  }

  volverAlLogin() {
    this.vistaActual = 'login';
  }

  iniciarSesion(event: Event) {
    event.preventDefault(); // Evita recargar la página
    this.vistaActual = 'dashboard'; // Muestra el panel/dashboard de enfermería
  }
}