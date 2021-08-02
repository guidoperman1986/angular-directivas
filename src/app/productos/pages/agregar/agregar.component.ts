import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    nombre: ['', Validators.required]
  })

  color!: string;
  texto1: string = "Ingrese este valor";

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  cambiarNombre(){
    this.texto1 = Math.random().toString();
  }

  cambiarColor(){
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    this.color = color;
  }

  tieneError(campo: string){
    return this.miFormulario.get(campo)?.invalid || false;
  }

}
