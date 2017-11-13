import { Directive, Renderer2, OnInit, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private renderer: Renderer2, private elRef: ElementRef) { }

  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseenter') mouseover() {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseleave') mouseleave() {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
  }
}
