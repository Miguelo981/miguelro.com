import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[share-comp]'
})
export class ShareCompDirective {
  @Input('share-comp') shared: any

  constructor() { }

}
