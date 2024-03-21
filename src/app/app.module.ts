import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpleadosComponent } from 'src/app/empleados/empleados.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, EmpleadosComponent, EmpleadoComponent  // <-- Alta Componentes !!!
  ],
  imports: [
    BrowserModule,  //AQUÍ LAS IMPORTACIONES DE LOS MÓDULOS QUE REQUIEREN
    FormsModule     // LOS COMPONENTES DE  NUESTRA APP
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
