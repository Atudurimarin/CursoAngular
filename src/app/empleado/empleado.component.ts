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
  textoDeRegistro = "No hay nadie registrado";
  trabajando = true;
  textoLaboral = "";

  getEdad() {
    return this.edad;
  }

  callTxt(value: String) {
    return value
  }

  getRegistroUsuario() {
    this.usuRegistrado = false;
  }

  mostrarVentana() {
    alert("Usuario Registrado")
  }

  cambiaTexto() {
    this.textoDeRegistro = "El usuario está ahora registrado"
  }

  setTextoLaboral(event: Event) {
    if ((<HTMLInputElement>event.target).value == "paro") {  // SE DEBE CASTEAR EL TARGET DEL EVENTO AL TIPO DE ELEMENTO HTML EN ESTE CASO HTMLInputElement
      this.textoLaboral = "El trabajador está en paro";     //EN EL VÍDEO LO COMPRUEBA HACIENDO alert(event.target)
    }

    else {
      this.textoLaboral = "El trabajador está trabajando";
    }


  }


  constructor() { }

  ngOnInit(): void {
  }

}
