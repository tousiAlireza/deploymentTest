import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2 ) { }

  highlight: string = '#04ACC0';

  @HostListener('mouseenter') onMouseEnter() {
    this.changeBackgroundColor(this.highlight);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeBackgroundColor('transparent');
  }
  

  private changeBackgroundColor(color: string) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', color)
  }
}
