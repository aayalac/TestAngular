import { Component } from "@angular/core";

@Component({
  selector: "app-persona",
  templateUrl: "./persona.component.html",
  styleUrls: ["./persona.component.css"]
})
export class PersonaComponent {

  Nombre ="Mateo"; // ejempo de Interpolación

  Apellido ="Perez";

  Area = "Sistemas";

  habilitarCuadro = true;

  usuRegistrado = false;

  textoDeRegistro="No hay nadie registrado";

  getRegistroUsuario(){ // ejemplo de Property Binding

    this.usuRegistrado=false;

  }

  setUsuarioRegistrado(event:Event){
    //alert(event.target) // Ejemplo de Event Binding, captura el objeto de tipo Event
    //this.textoDeRegistro="El usuario se acaba de registrar"; // Ejemplo de Event Binding

    if ((<HTMLInputElement>event.target).value=="si"){
      this.textoDeRegistro="El usuario se acaba de registrar"
    }
    else{
      this.textoDeRegistro="El usuario está sin registro"
    }

  }
}