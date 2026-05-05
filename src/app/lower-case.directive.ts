import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appLowerCase]'
})

export class LowerCaseDirective {

      constructor(
          private _eleRef:ElementRef,
          private _rendrer:Renderer2
      ){}
       
  @HostListener('keyup',['$event'])
  onSearch(eve:Event){
      let inputControl=(eve.target as HTMLInputElement)
      let val=inputControl.value.toLowerCase()
      inputControl.value=val
  }
  
  }
  


