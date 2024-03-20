import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  nombre: String = "Juan";
  apellido: String = "Diaz";
  private edad = 18; // <-- para que no sea accesible desde fuera de la clase
  experiencia = 5;    // y sólo sean accesibles mediante getters y setters
  empresa: String = "W2M"
  habilitado = false;  // ESTE VALOR DETERMINARÁ EL VALOR DE LA PROPIEDAD DEL ELEMENTO HTML
  usuRegistrado = false; // ESTE VALOR DETERMINARÁ EL VALOR DE LA PROPIEDAD DEL ELEMENTO HTML

  getEdad() {
    return this.edad;
  }

  callTxt(value: String) {
    return value
  }

  getRegistroUsuario() {
    this.usuRegistrado = true;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
