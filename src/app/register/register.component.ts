import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  constructor() { }
  nombre: string;
  apellido: string;
  correo: string;
  password: string;
  repass: string;
  login(){
    console.log("Nombre: " +this.nombre);
    console.log("Apellido: " +this.apellido);
    console.log("Correo: " +this.correo);
    console.log("passwrod: " +this.password);
    console.log("repeatpassword: " +this.repass);
  }
  mensajelogin(){
    alert("Gracias por Registrarse " +this.nombre);
    this.nombre=this.nombre;
    this.apellido=this.apellido;
    this.correo=this.correo;
    this.password=this.password;
    this.repass=this.repass;
    console.log(this.login);

  }
  ngOnInit() {}

}
