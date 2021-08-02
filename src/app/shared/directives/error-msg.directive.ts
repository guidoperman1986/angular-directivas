import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appErrorMsg]'
})
export class ErrorMsgDirective implements OnInit {
  _color = 'red';
  _mensaje = 'Ingresa un texto';

  htmlElement: ElementRef<HTMLElement>;
  @Input() set color(valor: string){
    this._color = valor;
    this.setColor();
  }
  @Input() set mensaje(valor: string){    
    this._mensaje = valor;
    this.mostrarError();
  }

  @Input() set valido(valor: boolean){
    if (valor){
      this.htmlElement.nativeElement.classList.add('hidden');
    } else {
      this.htmlElement.nativeElement.classList.remove('hidden');      
    }
  }

  constructor(private el: ElementRef<HTMLElement>) { 
    this.htmlElement = el;

  }
  
  ngOnInit(): void {
    this.setColor();
    this.mostrarError();
    this.setEstilo();
  }

  setEstilo(){
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this._color;
  }

  mostrarError(): void{
    this.htmlElement.nativeElement.innerText = this._mensaje;
  }
  

}
