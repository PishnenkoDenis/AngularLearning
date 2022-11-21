import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appFont]'
})
export class FontDirective {

  @Input('color') color!: string;

  constructor(private element: ElementRef) { }

  @HostListener('mouseenter') onMouseIn() {
    this.setBgColor(this.color);
  }

  @HostListener('mouseleave') onMouseOut() {
    this.setBgColor('white');
  }

  setBgColor(color: string) {
    this.element.nativeElement.style.background = color;
  }

}
