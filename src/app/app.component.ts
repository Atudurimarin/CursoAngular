import { Component } from '@angular/core';

@Component({
  selector: 'app-root',                   // ESTO       |  se buscará este componente con este selector cómo tag en index.html
  templateUrl: './app.component.html',    // SE LLAMA   |  se usará esta plantilla html
  styleUrls: ['./app.component.css']      // DECORADOR  |  se usará esta hoja de estilos
})
export class AppComponent {
  title = 'Angular13';

  saludo = 'Esta es una variable exportada desde app.component.ts';
}
