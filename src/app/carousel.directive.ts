import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { ICarouselContext } from './interfaces/app-interfaces'

@Directive({
  selector: '[appCarousel]'
})
export class CarouselDirective implements OnInit {

  context: ICarouselContext | null = null;
  index: number = 0;
  // next: () => void = undefined;

  constructor(private templateRef: TemplateRef<ICarouselContext>,
              private viewContainerRef: ViewContainerRef) { }

  @Input() images: string[] = [];

  public ngOnInit() {
    this.context = {
      $implicit: this.images[0],
      controller: {
      }
    }

    this.viewContainerRef.createEmbeddedView(this.templateRef, this.context);

    // this.next = () => {
    //   this.index++;
    //   if (this.index >= this.images.length) {
    //     this.index = 0
    //   }
      // this.context?.$implicit = this.images[this.index]
    // }

  }

}
