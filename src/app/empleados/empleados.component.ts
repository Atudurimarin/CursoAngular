import { Component } from "@angular/core";

@Component({
  selector: 'app-empleados',        // Selector por el cuál será llamado este componente en index.html (como tag)
  templateUrl: "./empleados.component.html", // Plantilla que será usada
  styleUrls: ["./empleados.component.css"]  // Hoja de estilos que se aplicará a la plantilla (opcional)
})

export class EmpleadosComponent {
  empresa = "W2M"    // <-- Variable que se va a usar en la plantila
}
