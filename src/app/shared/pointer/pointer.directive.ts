import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPointer]'
})
export class PointerDirective {

  constructor(private eleRef: ElementRef) {
    eleRef.nativeElement.style.cursor = 'pointer';
    
   }

}
