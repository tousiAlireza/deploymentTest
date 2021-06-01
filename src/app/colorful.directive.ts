import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appColorful]'
})
export class ColorfulDirective {

  availableColors = ['#04ACC0', '#047F9F', '#04658B', '#04527C', '#04275A'];
  @HostBinding('style.color') color: string | undefined;
  @HostBinding('style.border-color') borderColor: string | undefined;
  @HostListener('focus') newColor() {
    const randomColorIndex = Math.floor(Math.random() * this.availableColors.length);
    this.color = this.borderColor = this.availableColors[randomColorIndex];
  }
}
