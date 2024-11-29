import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]'
})
export class HoverHighlightDirective {
  @Input() defaultColor: string = ''; // Default color
  @Input() highlightColor: string = 'yellow'; // Highlight color

  constructor(private el: ElementRef) {}

  // Listen for mouse enter
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || this.defaultColor);
  }

  // Listen for mouse leave
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
